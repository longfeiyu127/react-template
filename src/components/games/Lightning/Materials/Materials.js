import React from 'react';
// import Tictactoe from './tictactoe'
// import Fivechess from './fivechess'
import './Materials.less';

class Materials extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // eslint-disable-next-line
    const { position, materialsType, size } = this.props;
    return (
      <div
        className="g-lig-materials"
        style={{
          top: `${position.top}rem`,
          left: `${position.left}rem`,
          height: `${size.height}rem`,
          width: `${size.width}rem`
        }}
      >
        {/* style={{fontWeight: (move === stepNumber) ? 900 : 500, cursor: 'pointer'}} */}
        <main className={['materials-main', materialsType].join(' ')} />
      </div>
    );
  }
}

export default Materials;
