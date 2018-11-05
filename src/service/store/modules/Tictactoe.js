function calculateWinner(squares, callback, state) {
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
    callback(state, { res, lineRes });
  }
  return res;
}

const Tictactoe = {
  state: {
    line: null,
    gameover: false,
    stepNumber: 0,
    history: [
      {
        squares: [[null, null, null], [null, null, null], [null, null, null]]
      }
    ],
    xIsNext: true,
    oWin: 0,
    xWin: 0
  },
  reducers: {
    setChess(state, { i, j }) {
      const { history, stepNumber, xIsNext, xWin, oWin } = state;
      const historyArr = history.slice(0, stepNumber + 1);
      const current = historyArr[historyArr.length - 1];
      const squares = JSON.parse(JSON.stringify(current.squares));
      if (squares[i][j] || calculateWinner(squares, this)) {
        return state;
      }
      squares[i][j] = xIsNext ? 'X' : 'O';
      let data = {
        history: historyArr.concat([
          {
            squares
          }
        ]),
        stepNumber: historyArr.length,
        xIsNext: !xIsNext
      };
      if (
        calculateWinner(
          squares,
          Tictactoe.reducers.setGameover,
          Tictactoe.state
        )
      ) {
        data = {
          ...data,
          oWin: !xIsNext ? oWin + 1 : oWin,
          xWin: xIsNext ? xWin + 1 : xWin
        };
      }
      return {
        ...state,
        ...data
      };
    },
    setReset(state) {
      return {
        ...state,
        line: null,
        gameover: false,
        stepNumber: 0,
        history: [
          {
            squares: [
              [null, null, null],
              [null, null, null],
              [null, null, null]
            ]
          }
        ],
        xIsNext: true
      };
    },
    setStep(state, step) {
      return {
        ...state,
        stepNumber: step,
        xIsNext: !(step % 2)
      };
    },
    setGameover(state, { res, lineRes }) {
      console.log(state);
      console.log(res);
      console.log(!!res);
      console.log(lineRes);
      return {
        ...state,
        line: res ? lineRes : null,
        gameover: !!res
      };
    }
  },
  effects: {}
};

export default Tictactoe;
