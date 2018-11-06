import React from 'react';
// import Tictactoe from './tictactoe'
// import Fivechess from './fivechess'
import './Pause.less';

function Pause(props) {
  console.log(props);
  // eslint-disable-next-line
  const { EngineStatus, start, pause } = props;
  return (
    <div className="g-lig-Pause">
      <div
        className="Pause-pause iconfont icon-pause"
        onClick={() => pause()}
      />
      <div className={['Pause-main', !EngineStatus ? '' : 'hide'].join(' ')}>
        <div className="start iconfont icon-start" onClick={() => start()} />
      </div>
    </div>
  );
}

export default Pause;
