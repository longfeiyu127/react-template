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
  // eslint-disable-next-line
  enemy.position.top = -0.5 * enemy.size.height;
  // eslint-disable-next-line
  enemy.position.left = Math.random() * (3.75 - enemy.size.width);
  // eslint-disable-next-line
  enemy.targetPosition.left = enemy.position.left;
  return enemy;
}

// 创建敌机
function createEnemy(state) {
  // eslint-disable-next-line
  // let EnemyArr = JSON.parse(JSON.stringify(this.state.EnemyArr));
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
  // eslint-disable-next-line
  const { BulletArr, playerTop, playerLeft } = state;
  const position = {
    // eslint-disable-next-line
    top: playerTop,
    left:
      // eslint-disable-next-line
      playerLeft +
      PlayerConfig.size.width * 0.5 -
      BulletConfig.player.size.width * 0.5
  };
  const targetPosition = {
    top: 'min',
    left: this.playerLeft
  };
  const newBullet = {};
  Object.assign(newBullet, BulletConfig.player);
  newBullet.position = position;
  newBullet.targetPosition = targetPosition;
  BulletArr.push(newBullet);
  return BulletArr;
}

// 处理敌机移动
function EnemyControll(EnemyArr) {
  // eslint-disable-next-line
  // let EnemyArr = JSON.parse(JSON.stringify(this.state.EnemyArr));
  const EnemyArrRes = EnemyArr.map(item => {
    // console.log(config.enemyType[item.enemyType])
    // console.log(item.speed);
    // eslint-disable-next-line
    item.position.top += item.speed;
    return item;
  });
  // console.log(window.clientHeight)
  // console.log(window.clientHeight * 0.005)
  return EnemyArrRes.filter(
    item =>
      item.position.top <= (window.clientHeight / window.clientWidth) * 3.75
  );
}

//  处理子弹移动(处理超出边界子弹)
function BulletControll(BulletArr) {
  // eslint-disable-next-line
  // let BulletArr = JSON.parse(JSON.stringify(this.state.BulletArr));
  const BulletArrRes = BulletArr.map(item => {
    // eslint-disable-next-line
    item.position.top -= item.speed;
    return item;
  });
  return BulletArrRes.filter(item => item.position.top >= 0);
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
    setChess(state) {
      return {
        ...state
      };
    },
    setReset(state) {
      return {
        ...state
      };
    },
    // 创建引擎
    creator(state) {
      this.creatorTimer = setInterval(() => {
        const EnemyArr = createEnemy(deepCopy(state));
        const BulletArr = createBullet(deepCopy(state));
        return {
          ...state,
          EnemyArr,
          BulletArr
        };
      }, 300);
    },

    // 移动位置/检查碰撞
    mainEngine() {
      this.mainEngineTimer = setInterval(() => {
        const { EngineStatus } = this.state;
        if (EngineStatus) {
          // 控制移动
          const EnemyArr = EnemyControll();
          const BulletArr = BulletControll();
          // console.log(EnemyArr)
          // 检查碰撞
          this.crashEngine(EnemyArr, BulletArr);
          // 处理完成，设置数据
          this.setState({
            BulletArr,
            EnemyArr
          });
        }
        // eslint-disable-next-line
    }, this.state.Enginespeed);
    },

    // 检查碰撞
    crashEngine(EnemyArr, BulletArr) {
      // eslint-disable-next-line
    EnemyArr.map((EnemyItem, EnemyIndex, EnemyArr) => {
        // eslint-disable-next-line
      BulletArr.map((BulletItem, BulletIndex, BulletArr) => {
          // console.log(EnemyItem, BulletItem)
          // const { EnemyX, EnemyY, BulletX, BulletY } = {}
          const EnemyX = EnemyItem.position.left + EnemyItem.size.width * 0.5;
          const EnemyY = EnemyItem.position.top + EnemyItem.size.height * 0.5;
          const BulletX =
            BulletItem.position.left + BulletItem.size.width * 0.5;
          const BulletY =
            BulletItem.position.top + BulletItem.size.height * 0.5;
          const CenterDistance =
            (EnemyItem.size.width + BulletItem.size.width) * 0.5;
          // console.log('----x', (BulletX - EnemyX))
          // console.log('----y', (BulletY - EnemyY))
          // console.log(Math.sqrt(Math.pow(BulletX-EnemyX, 2) + Math.pow(BulletY - EnemyY, 2)))

          if (
            Math.sqrt(
              // eslint-disable-next-line
              Math.pow(BulletX - EnemyX, 2) + Math.pow(BulletY - EnemyY, 2)
            ) < CenterDistance
          ) {
            const newRemains = { ...EnemyItem };
            // eslint-disable-next-line
            this.state.RemainsArr.push(newRemains);
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
        });
      });
    },

    delRemains(index) {
      // eslint-disable-next-line
      this.state.RemainsArr.splice(index, 1);
    },

    ControllPlayer(positionChange) {
      // console.log(positionChange)
      const { playerTop, playerLeft } = this.state;
      this.setState({
        // eslint-disable-next-line
      playerTop: parseInt((playerTop + positionChange.top) * 100) / 100,
        // eslint-disable-next-line
      playerLeft: parseInt((playerLeft + positionChange.left) * 100) / 100
      });
    }
  },
  effects: {}
};

export default Lightning;
