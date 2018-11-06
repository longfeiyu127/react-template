import React from 'react';
import './header.less';

export default function Header(props) {
  // eslint-disable-next-line
  const { fullScreen, isFullscreen, winner, isBlack } = props;
  return (
    <header className="g-fic-header">
      <div
        onClick={fullScreen}
        className={[
          'maximize',
          'iconfont',
          isFullscreen() ? 'icon-minimize' : 'icon-maximize'
        ].join(' ')}
      />
      <div className="player">
        <div className={['spark', winner ? 'hide' : ''].join(' ')} />
        <div
          className={['piece', isBlack ? 'pieceBlack' : 'pieceWhite'].join(' ')}
        />
      </div>
    </header>
  );
}
