import React from 'react';
// import Tictactoe from './tictactoe'
// import Fivechess from './fivechess'
import './Enemy.less';

class Enemy extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // eslint-disable-next-line
    const { position, enemyType, size } = this.props;
    // console.log(position);
    // let bulletDom;
    // switch (bulletTpey) {
    //   case 'player':
    //     bulletDom = <main className='player'></main>
    //     break;

    //   default:
    //     break;
    // }
    return (
      <div
        className="g-lig-enemy"
        style={{
          top: `${position.top}rem`,
          left: `${position.left}rem`,
          height: `${size.height}rem`,
          width: `${size.width}rem`
        }}
      >
        {/* style={{fontWeight: (move === stepNumber) ? 900 : 500, cursor: 'pointer'}} */}
        <main className={['enemy-main', enemyType].join(' ')} />
      </div>
    );
  }
}

export default Enemy;
