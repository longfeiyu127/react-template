import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Square from '../Square/Square';
import Pointer from '../Pointer/Pointer';
import './Board.less';

function TictactoeBoard(props) {
  // eslint-disable-next-line
  const { onClick, line, history, stepNumber } = props;
  // console.log(line);
  const { squares } = history[stepNumber];
  return (
    <div className="g-tic-board">
      {squares.map((item, i) => (
        <div className="g-tic-board-row" key={i}>
          {item.map((value, j) => (
            <Square
              value={squares[i][j]}
              key={j}
              heightLine={line && line.some(v => v[0] === i && v[1] === j)}
              onClick={() => onClick({ i, j })}
            />
          ))}
        </div>
      ))}
      <Pointer line={line} />
    </div>
  );
}

const mapStateToProps = state => ({
  history: state.Tictactoe.history,
  stepNumber: state.Tictactoe.stepNumber,
  line: state.Tictactoe.line
});

const mapDispatchToProps = dispatch => ({
  onClick: dispatch.Tictactoe.setChess
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TictactoeBoard);
