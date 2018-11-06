import React from 'react';
import './square.less';

export default function Square(props) {
  // console.log(props)
  // eslint-disable-next-line
  const { onClick, inWinLine, value } = props;
  return (
    <div className="g-fic-square" onClick={onClick}>
      {/* <div className="squareItem squareBlack"></div> */}
      <div className={['squareItem', inWinLine ? 'squareWin' : ''].join(' ')}>
        <div
          className={[
            'squarePiece',
            value ? (value === 'Black' ? 'squareBlack' : 'squareWhite') : 'hide'
          ].join(' ')}
        />
      </div>
      {/* <div className={['squareItem', props.value ? (props.value === 'O' ? 'squareItemO' : 'squareItemX') : ''].join(' ')}></div> */}
    </div>
  );
}
