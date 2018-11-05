import React from 'react';
import TictactoeBoard from '../../../components/games/tictactoe/Board/Board';
import TictactoeScoreboard from '../../../components/games/tictactoe/Scoreboard/Scoreboard';
import TictactoeVictory from '../../../components/games/tictactoe/Victory/Victory';
import Firework from '../../../components/common/Firework/Firework';
import './Tictactoe.less';

export default class Tictactoe extends React.Component {
  constructor() {
    super();
    this.state = {
      stepNumber: 0,
      history: [
        {
          squares: [[null, null, null], [null, null, null], [null, null, null]]
        }
      ],
      xIsNext: true,
      oWin: 0,
      xWin: 0
      // gameover: false
    };
    this.gameover = false;
    this.line = null;
  }

  calculateWinner(squares) {
    const resultArr = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[2, 0], [1, 1], [0, 2]]
    ];
    let lineRes = null;
    const res = resultArr.some(item => {
      const squareItem = squares[item[0][0]][item[0][1]];
      lineRes = item;
      return (
        squareItem && item.every(val => squareItem === squares[val[0]][val[1]])
      );
    });
    if (res) {
      this.line = res ? lineRes : null;
      this.gameover = !!res;
    }
    return res;
  }

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

  reset() {
    this.gameover = false;
    this.line = null;
    this.setState({
      stepNumber: 0,
      history: [
        {
          squares: [[null, null, null], [null, null, null], [null, null, null]]
        }
      ],
      xIsNext: true
    });
  }

  render() {
    const { oWin, xWin, history, stepNumber, xIsNext } = this.state;
    const current = history[stepNumber];
    return (
      <div className="g-tic-game">
        <TictactoeScoreboard oWin={oWin} xWin={xWin} />
        <div className="g-tic-board">
          <TictactoeBoard
            squares={current.squares}
            line={this.line}
            onClick={(i, j) => this.handleClick(i, j)}
          />
        </div>
        <div className="g-tic-info">
          <div
            className="operate take-back"
            onClick={() => this.jumpTo(stepNumber - 1)}
          >
            take back
          </div>
          <div className="operate reset" onClick={() => this.reset()}>
            reset
          </div>
        </div>
        <Firework gameover={this.gameover}>
          <TictactoeVictory
            winner={xIsNext ? 'playerB' : 'playerA'}
            reset={() => this.reset()}
          />
        </Firework>
      </div>
    );
  }
}
