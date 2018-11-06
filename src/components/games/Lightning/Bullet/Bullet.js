import React from 'react';
// import Tictactoe from './tictactoe'
// import Fivechess from './fivechess'
import './Bullet.less';

class Bullet extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // eslint-disable-next-line
    const { position, bulletTpey, size } = this.props;
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
        className="g-lig-bullet"
        style={{
          top: `${position.top}rem`,
          left: `${position.left}rem`,
          height: `${size.height}rem`,
          width: `${size.width}rem`
        }}
      >
        {/* style={{fontWeight: (move === stepNumber) ? 900 : 500, cursor: 'pointer'}} */}
        <main className={['bullet-main', bulletTpey].join(' ')} />
      </div>
    );
  }
}

export default Bullet;
