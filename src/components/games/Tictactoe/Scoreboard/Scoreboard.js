import React from 'react';
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

// TictactoeScoreboard.propTypes = {
//   xWin: PropTypes.number.isRequired,
//   oWin: PropTypes.number.isRequired
// };

export default TictactoeScoreboard;
