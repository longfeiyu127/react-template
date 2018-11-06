import React from 'react';
import { Route } from 'react-router-dom';
// import Tictactoe from './tictactoe'
import Engine from '../../../components/games/Lightning/Engine/Engine';
import './Lightning.less';

class Lightning extends React.Component {
  constructor() {
    super();
    this.state = {
      // 选择难度
    };
  }

  render() {
    return (
      <div className="g-lightning">
        {/* <Route exact path={`${this.props.match.url}/tictactoe`} component={Tictactoe}/> */}
        {/* <Route exact path={`${this.props.match.url}/fivechess`} component={Fivechess}/> */}
        {/* <Route exact path={`${this.props.match.url}/games`} component={Games}/>
        <Route exact path={`${this.props.match.url}/ranks`} component={Ranks}/>
        <Route exact path={`${this.props.match.url}/developer`} component={Developer}/> */}
        <Route exact path="/games/lightning" component={Engine} />
      </div>
    );
  }
}

export default Lightning;
