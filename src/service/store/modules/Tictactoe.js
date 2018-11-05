function calculateWinner(squares) {
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

const Tictactoe = {
  state: {
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
      if (squares[i][j] || calculateWinner(squares)) {
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
      if (calculateWinner(squares)) {
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
    }
    /**
     *     this.setState({
      history: historyArr.concat([
        {
          squares
        }
      ]),
      stepNumber: historyArr.length,
      xIsNext: !xIsNext
    });
     */
  },
  effects: {
    async getTest() {
      console.log('chufagetTest');
      // 第二个变量为当前model的state的值，num1为调用incrementAsync时传递进来的第一个参数，num2为调用时传递的第二个参数，后面依次类推。例如：dispatch.count.incrementAsync(10, 20)时，num1 = 10, num2 = 20
      await new Promise(resolve => {
        setTimeout(() => {
          this.setTest(0);
          resolve();
        }, 2000);
      });
    }
  }
};

export default Tictactoe;
