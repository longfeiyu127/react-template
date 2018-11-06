import React from 'react';
// import Tictactoe from './tictactoe'
// import Fivechess from './fivechess'
import './Player.less';
import PlayerConfig from '../../../../service/config/Lightning/PlayerConfig';

const { size } = PlayerConfig;

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      // playertop: '',
      // left: '',
    };
  }

  render() {
    // eslint-disable-next-line
    const { position } = this.props;
    // console.log(position);
    return (
      <div
        className="g-lig-player"
        style={{
          top: `${position.top}rem`,
          left: `${position.left}rem`,
          height: `${size.height}rem`,
          width: `${size.width}rem`
        }}
      >
        {/* style={{fontWeight: (move === stepNumber) ? 900 : 500, cursor: 'pointer'}} */}
        <main className="player-main" />
      </div>
    );
  }
}

export default Player;
