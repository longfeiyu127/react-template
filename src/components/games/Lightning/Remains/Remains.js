import React from 'react';
// import Tictactoe from './tictactoe'
// import Fivechess from './fivechess'
import './Remains.less';

class Remains extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // eslint-disable-next-line
    const { index } = this.props;
    setTimeout(() => {
      // eslint-disable-next-line
      this.props.delRemains(index);
    }, 1550);
  }

  render() {
    // eslint-disable-next-line
    const { position, size } = this.props;
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
        className="g-lig-remains"
        style={{
          top: `${position.top}rem`,
          left: `${position.left}rem`,
          height: `${size.height}rem`,
          width: `${size.width}rem`
        }}
      >
        {/* style={{fontWeight: (move === stepNumber) ? 900 : 500, cursor: 'pointer'}} */}
        <main className="remains-main" />
      </div>
    );
  }
}

export default Remains;
