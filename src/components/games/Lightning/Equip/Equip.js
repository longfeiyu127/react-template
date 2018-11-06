import React from 'react';
// import Tictactoe from './tictactoe'
// import Fivechess from './fivechess'
import './Equip.less';

class Equip extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // eslint-disable-next-line
    const { life, bomb } = this.props;
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
      <div className="g-lig-equip">
        <div className="content">
          <div className="icon life" />
          <p className="count">{life}</p>
        </div>
        <div className="content">
          <div className="icon bomb" />
          <p className="count">{bomb}</p>
        </div>
      </div>
    );
  }
}

export default Equip;
