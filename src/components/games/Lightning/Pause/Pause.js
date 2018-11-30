import React from 'react';
import './Pause.less';

function Pause(props) {
  // console.log(props);
  // eslint-disable-next-line
  const { EngineStatus, start, pause } = props;
  return (
    <div className="g-lig-Pause">
      <div
        onClick={pause}
        // onClick={() => pause()}
        className="Pause-pause iconfont icon-pause"
        name="pause"
      />
      <div className={['Pause-main', !EngineStatus ? '' : 'hide'].join(' ')}>
        <div
          className="start iconfont icon-start"
          // onClick={() => start()}
          onClick={start}
          name="start"
        />
      </div>
    </div>
  );
}

export default Pause;
