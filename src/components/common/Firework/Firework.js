import React from 'react';
// import PropTypes from 'prop-types';
import './firework.less';

/* eslint-disable */
export default function Firework(props) {
  // console.log(props)
  return (
    <div className={['firework-box', props.gameover ? '' : 'hide'].join(' ')}>
      <div className="firework">
        <div className="before" />
        <div className="after" />
      </div>
      {props.children}
    </div>
  );
}
/* eslint-enable */
