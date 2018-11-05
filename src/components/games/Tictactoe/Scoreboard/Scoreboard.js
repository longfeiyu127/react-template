import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import './Scoreboard.less';

const TictactoeScoreboard = props => {
  // eslint-disable-next-line
  const { xWin, oWin } = props;
  return (
    <header className="g-tic-scoreboard">
      <p className="player">
        playerA
        <i className="playerA" />
      </p>
      <p className="score">
        {xWin}:{oWin}
      </p>
      <p className="player">
        playerB
        <i className="playerB" />
      </p>
    </header>
  );
};

const mapStateToProps = state => ({
  xWin: state.Tictactoe.xWin,
  oWin: state.Tictactoe.oWin
});

export default connect(
  mapStateToProps,
  null
)(TictactoeScoreboard);
