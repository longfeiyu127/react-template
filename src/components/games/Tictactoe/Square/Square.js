import React from 'react';
// import PropTypes from 'prop-types';
import './Square.less';

export function TictactoeSquare(props) {
  // console.log(props)
  // eslint-disable-next-line
  const { onClick, heightLine, value } = props;
  // console.log(props);
  const squareItem = value
    ? value === 'O'
      ? 'squareItemO'
      : 'squareItemX'
    : '';
  return (
    <div
      className="g-tic-square"
      onClick={onClick}
      style={{ color: heightLine ? 'red' : '' }}
    >
      <div className={['squareItem', squareItem].join(' ')} />
    </div>
  );
}

// TictactoeSquare.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   heightLine: PropTypes.oneOf([PropTypes.bool, null]).isRequired,
//   value: PropTypes.string.isRequired
// };

export default TictactoeSquare;
