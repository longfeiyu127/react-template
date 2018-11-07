import React from 'react';
import { connect } from 'react-redux';
// import Tictactoe from './tictactoe'
import Player from '../Player/Player';
import Bullet from '../Bullet/Bullet';
import Enemy from '../Enemy/Enemy';
// import Materials from '../Materials/Materials';
import Equip from '../Equip/Equip';
import Remains from '../Remains/Remains';
import Pause from '../Pause/Pause';
import './Engine.less';
// import EnemyConfig from '../../../../service/config/Lightning/EnemyConfig';
// import BulletConfig from '../../../../service/config/Lightning/BulletConfig';
// import EngineConfig from '../../../../service/config/Lightning/EngineConfig';
import PlayerConfig from '../../../../service/config/Lightning/PlayerConfig';

const config = {
  step: 0.05, // 控住步长
  bulletTpey: {
    // 玩家子弹
    player: {
      size: {},
      position: {}
    }
    // 玩家导弹
    // 敌机子弹
  },
  enemyType: {
    enemyA0: {
      size: {
        height: 0,
        width: 2
      },
      position: {
        top: 0,
        left: 2
      },
      targetPosition: {
        top: 5,
        left: 2
      },
      HP: '',
      speed: 0.01
    }
  }
};
class Engine extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.creatorTimer = null;
    this.mainEngineTimer = null;
  }

  componentWillMount() {
    this.start();
    window.onblur = () => {
      this.pause();
    };
  }

  componentWillUnmount() {
    this.pause();
    window.onblur = null;
  }

  start() {
    // eslint-disable-next-line
    const { EngineStatus, creator, mainEngine, setEngineStatus, Enginespeed, clientWidth, clientHeight } = this.props;
    console.log(EngineStatus);
    if (!EngineStatus) {
      setEngineStatus(true);
      this.keyControll(true);
      this.creatorTimer = setInterval(() => {
        creator();
      }, 300);
      this.mainEngineTimer = setInterval(() => {
        mainEngine({ clientHeight, clientWidth });
      }, Enginespeed);
      window.onbeforeunload = () => {
        this.pause();
        window.onbeforeunload = null;
      };
    }
  }

  pause() {
    // eslint-disable-next-line
    const { EngineStatus, setEngineStatus } = this.props;
    if (EngineStatus) {
      this.keyControll(false);
      setEngineStatus(false);
      clearInterval(this.creatorTimer);
      clearInterval(this.mainEngineTimer);
      this.creatorTimer = null;
      this.mainEngineTimer = null;
      document.body.onkeydown = null;
    }
  }

  keyControll(type) {
    if (type) {
      // eslint-disable-next-line
      const _this = this;
      // eslint-disable-next-line
      const { ControllPlayer, clientHeight, clientWidth } = this.props;
      document.body.onkeydown = evt => {
        const { playerTop, playerLeft } = _this.props;
        const e = evt || window.event;
        // 边界判定
        switch (e.keyCode) {
          case 37:
            if (playerLeft >= 0) {
              ControllPlayer({ left: -config.step, top: 0 });
            }
            break;
          case 38:
            if (playerTop >= 0) {
              ControllPlayer({ left: 0, top: -config.step });
            }
            break;
          case 39:
            if (playerLeft + PlayerConfig.size.width <= 3.75) {
              ControllPlayer({ left: config.step, top: 0 });
            }
            break;
          case 40:
            if (
              playerTop + PlayerConfig.size.height <=
              (clientHeight / clientWidth) * 3.75
            ) {
              ControllPlayer({ left: 0, top: config.step });
            }
            break;
          default:
            break;
        }
      };
    } else {
      document.body.onkeydown = null;
    }
  }

  render() {
    /* eslint-disable */
    const {
      playerTop,
      playerLeft,
      EnemyArr,
      BulletArr,
      RemainsArr,
      EngineStatus
    } = this.props;
    /* eslint-emable */
    // let item = EnemyArr[0]
    // console.log('enemy', EnemyArr);
    const EnemyDom = EnemyArr.map((item, index) => (
      <Enemy
        position={item.position}
        size={item.size}
        enemyType={[item.enemyType, item.status].join(' ')}
        key={index}
      />
    ));
    const BulletDom = BulletArr.map((item, index) => (
      <Bullet
        position={item.position}
        size={item.size}
        bulletTpey={item.bulletTpey}
        key={index}
      />
    ));
    const RemainsDom = RemainsArr.map((item, index) => (
      <Remains
        position={item.position}
        size={item.size}
        key={index}
        index={index}
        // eslint-disable-next-line
        delRemains={index => {
          this.props.delRemains(index);
        }}
      />
    ));
    // console.log(BulletDom)
    return (
      <div className="g-lig-engine">
        <div className="background" />
        {/* 玩家 */}
        <Player position={{ top: playerTop, left: playerLeft }} />
        {/* 子弹 */}
        {BulletDom}
        {/* 敌机 */}
        {EnemyDom}
        {/* 残骸 */}
        {RemainsDom}
        {/* <Remains position={{top: 1.75, left: 0.3}} size={{height: 0.65, width: 0.65}} /> */}
        {/* 物资 */}
        {/* <Materials position={{top: 1.75, left: 0.3}} size={{height: 0.65, width: 0.65}} materialsType={'power'}/> */}
        {/* 状态 */}
        <Equip life={2} bomb={3} />
        <Pause
          EngineStatus={EngineStatus}
          start={() => this.start()}
          pause={() => this.pause()}
        />
      </div>
    );
  }
}
/**
 * 
 * @param 
 * {    // 运算状态
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
    RemainsArr: []} state 
 */

const mapStateToProps = state => ({
  clientHeight: state.screen.clientHeight,
  clientWidth: state.screen.clientWidth,
  EngineStatus: state.Lightning.EngineStatus,
  Enginespeed: state.Lightning.Enginespeed,
  playerTop: state.Lightning.playerTop,
  playerLeft: state.Lightning.playerLeft,
  BulletArr: state.Lightning.BulletArr,
  EnemyArr: state.Lightning.EnemyArr,
  RemainsArr: state.Lightning.RemainsArr
});

const mapDispatchToProps = dispatch => ({
  setEngineStatus: dispatch.Lightning.setEngineStatus,
  creator: dispatch.Lightning.creator,
  mainEngine: dispatch.Lightning.mainEngine,
  delRemains: dispatch.Lightning.delRemains,
  ControllPlayer: dispatch.Lightning.ControllPlayer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Engine);
