import React from 'react';
import { connect } from 'react-redux';
import Header from '../../../components/games/Fivechess/Header/Header';
import Board from '../../../components/games/Fivechess/Board/Board';
import Footer from '../../../components/games/Fivechess/Footer/Footer';
import Victory from '../../../components/games/Fivechess/Victory/Victory';
import Firework from '../../../components/common/Firework/Firework';
// // import Scoreboard from './components/Scoreboard'
import './Fivechess.less';
import { fullScreen, isFullscreen } from '../../../utils/fullScreen';

export function Fivechess(props) {
  // eslint-disable-next-line
  const { history, winner, winnerCoord, isBlack, handleClick, reset } = props;
  const current = history[history.length - 1];
  return (
    <div className="g-fivechess">
      <Header
        isBlack={isBlack}
        winner={winner}
        isFullscreen={isFullscreen}
        fullScreen={fullScreen}
      />
      <Board
        squares={current.squares}
        winner={winner}
        winnerCoord={winnerCoord}
        onClick={(i, j) => handleClick(i, j)}
      />
      <Footer />
      <Firework gameover={winner}>
        <Victory winner={winner} reset={() => reset()} />
      </Firework>
    </div>
  );
}

const mapStateToProps = state => ({
  history: state.Fivechess.history,
  isBlack: state.Fivechess.isBlack,
  winner: state.Fivechess.winner,
  winnerCoord: state.Fivechess.winnerCoord
});

const mapDispatchToProps = dispatch => ({
  handleClick: dispatch.Fivechess.setChess,
  reset: dispatch.Fivechess.setReset
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fivechess);
