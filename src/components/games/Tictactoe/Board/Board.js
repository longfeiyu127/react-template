import React from 'react';
// import PropTypes from 'prop-types';
import Square from '../Square/Square';
import Pointer from '../Pointer/Pointer';
import './Board.less';

function TictactoeBoard(props) {
  // eslint-disable-next-line
  const { squares, onClick, line } = props;
  // console.log(line);
  return (
    <div className="g-tic-board">
      {squares.map((item, i) => (
        <div className="g-tic-board-row" key={i}>
          {item.map((value, j) => (
            <Square
              value={squares[i][j]}
              key={j}
              heightLine={line && line.some(v => v[0] === i && v[1] === j)}
              onClick={() => onClick(i, j)}
            />
          ))}
        </div>
      ))}
      <Pointer line={line} />
    </div>
  );
}

// TictactoeBoard.propTypes = {
//   squares: PropTypes.arrayOf(PropTypes.array).isRequired,
//   line: PropTypes.oneOf([null, PropTypes.array]).isRequired,
//   onClick: PropTypes.func.isRequired
// };

export default TictactoeBoard;
