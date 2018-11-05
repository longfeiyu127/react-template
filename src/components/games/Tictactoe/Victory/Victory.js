import React from 'react';
import { connect } from 'react-redux';
import './victory.less';

function TictactoeVictory(props) {
  /* eslint-disable */
  const { xIsNext, reset } = props;
  /* eslint-enable */
  const winner = xIsNext ? 'playerB' : 'playerA';
  return (
    <div className="g-tic-victory">
      <p>{winner} 胜利了</p>
      <p onClick={reset}>再来</p>
    </div>
  );
}

const mapStateToProps = state => ({
  xIsNext: state.Tictactoe.xIsNext
});

const mapDispatchToProps = dispatch => ({
  reset: dispatch.Tictactoe.setReset
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TictactoeVictory);
