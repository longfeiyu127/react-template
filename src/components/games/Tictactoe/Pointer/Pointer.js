import React from 'react';
// import PropTypes from 'prop-types';
import './Pointer.less';

function slantType(line) {
  return line && line.every(item => item[0] === item[1]) ? 'slant0' : 'slant1';
}

function checkLineType(line) {
  if (line) {
    const x = line[0][1];
    const y = line[0][0];
    if (line.every(item => x === item[1])) {
      return 'c';
    }
    if (line.every(item => y === item[0])) {
      return 'v';
    }
    return 's';
  }
  return line;
}

const TictactoePointer = props => {
  console.log(props);
  // eslint-disable-next-line
  const { line } = props;
  const lineType = checkLineType(line);
  return (
    <div className={['g-tic-pointer', line ? '' : 'hide'].join(' ')}>
      <div
        className={[
          'pointer',
          'crosswise',
          lineType && lineType === 'c' ? `crosswise${line[0][1]}` : 'hide'
        ].join(' ')}
      />
      <div
        className={[
          'pointer',
          'vertical',
          lineType && lineType === 'v' ? `vertical${line[0][0]}` : 'hide'
        ].join(' ')}
      />
      <div
        className={[
          'pointer',
          'slant',
          lineType && lineType === 's' ? slantType(line) : 'hide'
        ].join(' ')}
      />
    </div>
  );
};

// TictactoePointer.propTypes = {
//   line: PropTypes.arrayof(PropTypes.oneOf([PropTypes.array, undefined])).isRequired
// };

export default TictactoePointer;
