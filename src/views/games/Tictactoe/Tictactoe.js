import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import TictactoeBoard from '../../../components/games/Tictactoe/Board/Board';
import TictactoeScoreboard from '../../../components/games/Tictactoe/Scoreboard/Scoreboard';
import TictactoeVictory from '../../../components/games/Tictactoe/Victory/Victory';
import Firework from '../../../components/common/Firework/Firework';
import './Tictactoe.less';

function Tictactoe(props) {
  /* eslint-disable */
  const {
    gameover,
    stepNumber,
    jumpTo,
    reset
  } = props;
  /* eslint-emable */
  return (
    <div className="g-tic-game">
      <TictactoeScoreboard />
      <div className="g-tic-board">
        <TictactoeBoard />
      </div>
      <div className="g-tic-info">
        <div
          className="operate take-back"
          onClick={() => jumpTo(stepNumber - 1)}
        >
          take back
        </div>
        <div className="operate reset" onClick={() => reset()}>
          reset
        </div>
      </div>
      <Firework gameover={gameover}>
        <TictactoeVictory />
      </Firework>
    </div>
  );
}

const mapStateToProps = state => ({
  gameover: state.Tictactoe.gameover,
  stepNumber: state.Tictactoe.stepNumber
});

const mapDispatchToProps = dispatch => ({
  reset: dispatch.Tictactoe.setReset,
  jumpTo: dispatch.Tictactoe.setStep
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tictactoe);
