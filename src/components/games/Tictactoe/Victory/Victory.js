import React from 'react';
import { connect } from 'react-redux';
import './victory.less';

export function TictactoeVictory(props) {
  /* eslint-disable */
  const { xIsNext, reset } = props;
  /* eslint-enable */
  const winner = xIsNext ? 'playerB' : 'playerA';
  return (
    <div className="g-tic-victory">
      <p className="winner">{winner} Win</p>
      <p className="again" onClick={reset}>
        Again
      </p>
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
