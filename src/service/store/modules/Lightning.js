import EnemyConfig from '../../config/Lightning/EnemyConfig';
import BulletConfig from '../../config/Lightning/BulletConfig';
// import EngineConfig from '../../../../service/config/Lightning/EngineConfig';
import PlayerConfig from '../../config/Lightning/PlayerConfig';

// const config = {
//   step: 0.05, // 控住步长
//   bulletTpey: {
//     // 玩家子弹
//     player: {
//       size: {},
//       position: {}
//     }
//     // 玩家导弹
//     // 敌机子弹
//   },
//   enemyType: {
//     enemyA0: {
//       size: {
//         height: 0,
//         width: 2
//       },
//       position: {
//         top: 0,
//         left: 2
//       },
//       targetPosition: {
//         top: 5,
//         left: 2
//       },
//       HP: '',
//       speed: 0.01
//     }
//   }
// };

function deepCopy(params) {
  return JSON.parse(JSON.stringify(params));
}

// 移动敌机
function EnemyPosition(enemy) {
  const newEnemy = deepCopy(enemy);
  newEnemy.position.top = -0.5 * enemy.size.height;
  newEnemy.position.left = Math.random() * (3.75 - enemy.size.width);
  newEnemy.targetPosition.left = enemy.position.left;
  return newEnemy;
}

// 创建敌机
function createEnemy(state) {
  const { EnemyArr } = state;
  const newEnemy = [];
  const EnemyWeightA = Math.random() * 100;
  if (EnemyWeightA < 10) {
    newEnemy.push(EnemyPosition(EnemyConfig.enemyA0));
  } else if (EnemyWeightA >= 10 && EnemyWeightA < 20) {
    newEnemy.push(EnemyPosition(EnemyConfig.enemyA1));
  } else if (EnemyWeightA >= 30 && EnemyWeightA < 40) {
    newEnemy.push(EnemyPosition(EnemyConfig.enemyA2));
  }
  const EnemyWeightC = Math.random() * 100;
  if (EnemyWeightC < 2) {
    newEnemy.push(EnemyPosition(EnemyConfig.enemyC));
  }
  return EnemyArr.concat(newEnemy);
}

// 创建子弹
function createBullet(state) {
  const { BulletArr, playerTop, playerLeft } = state;
  const position = {
    top: playerTop,
    left:
      playerLeft +
      PlayerConfig.size.width * 0.5 -
      BulletConfig.player.size.width * 0.5
  };
  const targetPosition = {
    top: 'min',
    left: 0
    // left: this.playerLeft
  };
  const newBullet = {};
  Object.assign(newBullet, BulletConfig.player);
  newBullet.position = position;
  newBullet.targetPosition = targetPosition;
  BulletArr.push(newBullet);
  return BulletArr;
}

// 处理敌机移动
function EnemyControll(EnemyArr, screen) {
  const EnemyArrRes = EnemyArr.map(item => {
    // console.log(config.enemyType[item.enemyType])
    // console.log(item.speed);
    // eslint-disable-next-line
    item.position.top += item.speed;
    return item;
  });
  return EnemyArrRes.filter(
    item =>
      // item.position.top <= (screen.clientHeight / screen.clientWidth) * 3.75
      item.position.top <= screen.clientHeight / 100
  );
}

//  处理子弹移动(处理超出边界子弹)
function BulletControll(BulletArr) {
  const BulletArrRes = BulletArr.map(item => {
    // eslint-disable-next-line
    item.position.top -= item.speed;
    return item;
  });
  return BulletArrRes.filter(item => item.position.top >= 0);
}

// 检查碰撞
function crashEngine(EnemyArr, BulletArr) {
  const RemainsArr = [];
  EnemyArr.map((EnemyItem, EnemyIndex) => {
    BulletArr.map((BulletItem, BulletIndex) => {
      // console.log(EnemyItem, BulletItem)
      // const { EnemyX, EnemyY, BulletX, BulletY } = {}
      const EnemyX = EnemyItem.position.left + EnemyItem.size.width * 0.5;
      const EnemyY = EnemyItem.position.top + EnemyItem.size.height * 0.5;
      const BulletX = BulletItem.position.left + BulletItem.size.width * 0.5;
      const BulletY = BulletItem.position.top + BulletItem.size.height * 0.5;
      const CenterDistance =
        (EnemyItem.size.width + BulletItem.size.width) * 0.5;
      if (
        Math.sqrt((BulletX - EnemyX) ** 2 + (BulletY - EnemyY) ** 2) <
        CenterDistance
      ) {
        const newRemains = { ...EnemyItem };
        RemainsArr.push(newRemains);
        EnemyArr.splice(EnemyIndex, 1);
        BulletArr.splice(BulletIndex, 1);
        // console.log('pengdaole')
        // console.log(EnemyX, EnemyY)
        // console.log(BulletX, BulletY)
        // console.log(EnemyItem.size.width*0.5, BulletItem.size.width*0.5)
        // console.log(Math.sqrt(Math.pow(BulletX-EnemyX, 2) + Math.pow(BulletY - EnemyY, 2)))
        // console.log((EnemyItem.size.width + BulletItem.size.width))
        // alert('pengdaole')
      }
      return null;
    });
    return null;
  });
  return {
    newRemainsArr: RemainsArr,
    newEnemyArr: EnemyArr,
    newBulletArr: BulletArr
  };
}

const Lightning = {
  state: {
    // 运算状态
    EngineStatus: false,
    Enginespeed: 15,
    // Enginespeed: 100,
    // 玩家位置
    playerTop: 3.8,
    playerLeft: 1.35,
    // 子弹数组
    BulletArr: [],
    // 敌机数组
    EnemyArr: [],
    // 残骸数组
    RemainsArr: []
  },
  reducers: {
    setEngineStatus(state, bol) {
      return {
        ...state,
        EngineStatus: bol
      };
    },
    // 创建引擎
    creator(state) {
      const EnemyArr = createEnemy(deepCopy(state));
      const BulletArr = createBullet(deepCopy(state));
      return {
        ...state,
        EnemyArr,
        BulletArr
      };
    },
    // 移动位置/检查碰撞
    mainEngine(state, screen) {
      const { EngineStatus } = state;
      if (EngineStatus) {
        // 控制移动
        const EnemyArr = EnemyControll(deepCopy(state.EnemyArr), screen);
        const BulletArr = BulletControll(deepCopy(state.BulletArr));
        // 检查碰撞
        const { newRemainsArr, newEnemyArr, newBulletArr } = crashEngine(
          EnemyArr,
          BulletArr
        );
        // 处理完成，设置数据
        return {
          ...state,
          RemainsArr: state.RemainsArr.concat(newRemainsArr),
          BulletArr: newBulletArr,
          EnemyArr: newEnemyArr
        };
      }
      return {
        ...state
      };
    },
    // 删除残骸
    delRemains(state, index) {
      return {
        ...state,
        RemainsArr: state.RemainsArr.splice(index, 1)
      };
    },
    // 控制主机移动
    ControllPlayer(state, positionChange) {
      // console.log(positionChange);
      const { playerTop, playerLeft } = state;
      return {
        ...state,
        playerTop: parseInt((playerTop + positionChange.top) * 100, 10) / 100,
        playerLeft: parseInt((playerLeft + positionChange.left) * 100, 10) / 100
      };
    }
  },
  effects: {}
};

export default Lightning;
