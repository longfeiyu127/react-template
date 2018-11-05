import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import TictactoeBoard from '../../../components/games/tictactoe/Board/Board';
import TictactoeScoreboard from '../../../components/games/tictactoe/Scoreboard/Scoreboard';
import TictactoeVictory from '../../../components/games/tictactoe/Victory/Victory';
import Firework from '../../../components/common/Firework/Firework';
import './Tictactoe.less';

class Tictactoe extends React.Component {
  static propTypes = {
    // list: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     email: PropTypes.string,
    //     html_url: PropTypes.string,
    //     name: PropTypes.string,
    //     avatar_url: PropTypes.string,
    //     score: PropTypes.number
    //   })
    // ).isRequired,
    // test: PropTypes.number.isRequired,
    // setTest: PropTypes.func.isRequired,
    // getTest: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      // stepNumber: 0,
      // history: [
      //   {
      //     squares: [[null, null, null], [null, null, null], [null, null, null]]
      //   }
      // ],
      // xIsNext: true,
      // oWin: 0,
      // xWin: 0,
      // gameover: false,
      // line: null
    };
  }

  // calculateWinner(squares) {
  //   const resultArr = [
  //     [[0, 0], [0, 1], [0, 2]],
  //     [[1, 0], [1, 1], [1, 2]],
  //     [[2, 0], [2, 1], [2, 2]],
  //     [[0, 0], [1, 0], [2, 0]],
  //     [[0, 1], [1, 1], [2, 1]],
  //     [[0, 2], [1, 2], [2, 2]],
  //     [[0, 0], [1, 1], [2, 2]],
  //     [[2, 0], [1, 1], [0, 2]]
  //   ];
  //   let lineRes = null;
  //   const res = resultArr.some(item => {
  //     const squareItem = squares[item[0][0]][item[0][1]];
  //     lineRes = item;
  //     return (
  //       squareItem && item.every(val => squareItem === squares[val[0]][val[1]])
  //     );
  //   });
  //   if (res) {
  //     this.setState({
  //       line: res ? lineRes : null,
  //       gameover: !!res
  //     });
  //   }
  //   return res;
  // }

  handleClick(i, j) {
    const { history, stepNumber, xIsNext, xWin, oWin } = this.state;
    const historyArr = history.slice(0, stepNumber + 1);
    const current = historyArr[historyArr.length - 1];
    const squares = JSON.parse(JSON.stringify(current.squares));
    if (squares[i][j] || this.calculateWinner(squares)) {
      return;
    }
    squares[i][j] = xIsNext ? 'X' : 'O';
    this.setState({
      history: historyArr.concat([
        {
          squares
        }
      ]),
      stepNumber: historyArr.length,
      xIsNext: !xIsNext
    });
    if (this.calculateWinner(squares)) {
      this.setState({
        oWin: !xIsNext ? oWin + 1 : oWin,
        xWin: xIsNext ? xWin + 1 : xWin
      });
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: !(step % 2)
    });
  }

  // reset() {
  //   this.setState({
  //     line: null,
  //     gameover: false,
  //     stepNumber: 0,
  //     history: [
  //       {
  //         squares: [[null, null, null], [null, null, null], [null, null, null]]
  //       }
  //     ],
  //     xIsNext: true
  //   });
  // }

  render() {
    /* eslint-disable */
    const {
      line,
      gameover,
      oWin,
      xWin,
      history,
      stepNumber,
      xIsNext,
      handleClick,
      jumpTo,
      reset
    } = this.props;
    /* eslint-emable */
    console.log('-----渲染',gameover);
    console.log(this.props);
    const current = history[stepNumber];
    return (
      <div className="g-tic-game">
        <TictactoeScoreboard oWin={oWin} xWin={xWin} />
        <div className="g-tic-board">
          <TictactoeBoard
            squares={current.squares}
            line={line}
            onClick={(i, j) => handleClick(i, j)}
          />
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
          <TictactoeVictory
            winner={xIsNext ? 'playerB' : 'playerA'}
            reset={() => reset()}
          />
        </Firework>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  line: state.Tictactoe.line,
  gameover: state.Tictactoe.gameover,
  stepNumber: state.Tictactoe.stepNumber,
  history: state.Tictactoe.history,
  xIsNext: state.Tictactoe.xIsNext,
  oWin: state.Tictactoe.oWin,
  xWin: state.Tictactoe.xWin
});

const mapDispatchToProps = dispatch => ({
  handleClick: dispatch.Tictactoe.setChess,
  reset: dispatch.Tictactoe.setReset,
  jumpTo: dispatch.Tictactoe.setStep
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tictactoe);
