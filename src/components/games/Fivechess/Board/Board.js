import React from 'react';
import Square from '../Square/Square';
// import Pointer from '../Pointer';
import './Board.less';

function inWinLine(winnerCoord, i, j) {
  const firstI = Math.min(winnerCoord[0][0], winnerCoord[4][0]);
  const LastI = Math.max(winnerCoord[0][0], winnerCoord[4][0]);
  if (i < firstI || i > LastI) {
    return;
  }
  const firstJ = Math.min(winnerCoord[0][1], winnerCoord[4][1]);
  const LastJ = Math.max(winnerCoord[0][1], winnerCoord[4][1]);
  if (j < firstJ || j > LastJ) {
    return;
  }
  const res = winnerCoord.find(item => item[0] === i && item[1] === j);
  // eslint-disable-next-line
  return res;
}

export default function Board(props) {
  // console.log(props)
  // eslint-disable-next-line
  const { squares, winnerCoord, onClick } = props;
  return (
    <div className="g-fic-board">
      <main className="board-main">
        {squares.map((item, i) => (
          <div className="g-fic-board-row" key={i}>
            {item.map((value, j) => (
              <Square
                value={squares[i][j]}
                inWinLine={winnerCoord && inWinLine(winnerCoord, i, j)}
                key={j}
                onClick={() => onClick({ i, j })}
              />
            ))}
          </div>
        ))}
      </main>
      <footer className="board-footer" />
      {/* <Pointer line={props.line} /> */}
    </div>
  );
}
