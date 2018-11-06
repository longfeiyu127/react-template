import React from 'react';
import './Victory.less';

export default function Victory(props) {
  // console.log(props)
  // eslint-disable-next-line
  const { winner, reset } = props;
  return (
    <div className="g-fic-victory">
      <p className="victory">victory： {winner}</p>
      <p className="result" onClick={reset}>
        Again
      </p>
    </div>
  );
}
