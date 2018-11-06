// 1.横向
function Crosswise(squares, i, j) {
  // 前面的相同棋子
  const target = squares[i][j];
  let [prev, next] = [0, 0];
  while (true) {
    if (j - prev - 1 < 0 || squares[i][j - prev - 1] !== target) {
      break;
    }
    prev++;
  }
  while (true) {
    if (j + next + 1 > 14 || squares[i][j + next + 1] !== target) {
      break;
    }
    next++;
  }
  return prev + next === 4 ? [[i, j - prev], [i, j + next]] : false;
}
// 2.竖向
function Vertical(squares, i, j) {
  const target = squares[i][j];
  let [prev, next] = [0, 0];
  while (true) {
    if (i - prev - 1 < 0 || squares[i - prev - 1][j] !== target) {
      break;
    }
    prev++;
  }
  while (true) {
    if (i + next + 1 > 14 || squares[i + next + 1][j] !== target) {
      break;
    }
    next++;
  }
  return prev + next === 4 ? [[i - prev, j], [i + next, j]] : false;
}
// 3.左上至右下
function TopLeft(squares, i, j) {
  const target = squares[i][j];
  let [prev, next] = [0, 0];
  while (true) {
    if (
      i - prev - 1 < 0 ||
      j - prev - 1 < 0 ||
      squares[i - prev - 1][j - prev - 1] !== target
    ) {
      break;
    }
    prev++;
  }
  while (true) {
    if (
      i + next + 1 > 14 ||
      j + next + 1 > 14 ||
      squares[i + next + 1][j + next + 1] !== target
    ) {
      break;
    }
    next++;
  }
  return prev + next === 4
    ? [[i - prev, j - prev], [i + next, j + next]]
    : false;
}
// 4.右上至左下
function TopRight(squares, i, j) {
  const target = squares[i][j];
  let [prev, next] = [0, 0];
  while (true) {
    if (
      i - prev - 1 < 0 ||
      j + prev + 1 > 14 ||
      squares[i - prev - 1][j + prev + 1] !== target
    ) {
      break;
    }
    prev++;
  }
  while (true) {
    if (
      i + next + 1 > 14 ||
      j - next - 1 < 0 ||
      squares[i + next + 1][j - next - 1] !== target
    ) {
      break;
    }
    next++;
  }
  return prev + next === 4
    ? [[i - prev, j + prev], [i + next, j - next]]
    : false;
}

function computeCoord(startPoint, endPoint) {
  const [startI, startJ] = startPoint;
  const stepI = (endPoint[0] - startPoint[0]) / 4;
  const stepJ = (endPoint[1] - startPoint[1]) / 4;
  const result = new Array(5).fill(undefined);
  return result.map((item, index) => [
    startI + index * stepI,
    startJ + index * stepJ
  ]);
}

function calculateWinner(...data) {
  const [squares, i, j] = data;
  const piece = squares[i][j];
  const result =
    Crosswise(...data) ||
    Vertical(...data) ||
    TopLeft(...data) ||
    TopRight(...data) ||
    undefined;
  if (result) {
    return {
      winnerCoord: computeCoord(...result),
      winner: piece
    };
  }
  return result;
}

const Fivechess = {
  state: {
    history: [
      {
        squares: new Array(15).fill(new Array(15).fill(null))
      }
    ],
    isBlack: true, // 'Black' 'White',
    winner: undefined,
    winnerCoord: null
  },
  reducers: {
    setChess(state, { i, j }) {
      const { history, isBlack, winner } = state;
      const current = history[history.length - 1];
      if (current.squares[i][j] || winner) {
        return {
          ...state
        };
      }
      const squares = JSON.parse(JSON.stringify(current.squares));
      squares[i][j] = isBlack ? 'Black' : 'White';
      const calWinner = calculateWinner(squares, i, j);
      let data = {
        history: history.concat([
          {
            squares
          }
        ]),
        isBlack: !isBlack
      };
      if (calWinner) {
        data = {
          ...data,
          ...calWinner
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
        history: [
          {
            squares: new Array(15).fill(new Array(15).fill(null))
          }
        ],
        isBlack: true, // 'Black' 'White',
        winner: undefined,
        winnerCoord: null
      };
    }
  },
  effects: {}
};

export default Fivechess;
