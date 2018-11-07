import React from 'react';
import { connect } from 'react-redux';
// import Tictactoe from './tictactoe'
// import Fivechess from './fivechess'
import './Player.less';
import PlayerConfig from '../../../../service/config/Lightning/PlayerConfig';
import { moveDetect } from '../../../../utils/mobileEvents';

const { size } = PlayerConfig;

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      // playertop: '',
      // left: '',
    };
  }

  componentDidMount() {
    if (this.Palyer) {
      console.log(this.Palyer);
      // eslint-disable-next-line
      const { ControllPlayer } = this.props;
      moveDetect(this.Palyer, ControllPlayer);
    }
  }

  render() {
    // eslint-disable-next-line
    const { position } = this.props;
    // console.log(position);
    return (
      <div
        ref={div => {
          this.Palyer = div;
        }}
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

const mapDispatchToProps = dispatch => ({
  ControllPlayer: dispatch.Lightning.ControllPlayer
});

export default connect(
  null,
  mapDispatchToProps
)(Player);
