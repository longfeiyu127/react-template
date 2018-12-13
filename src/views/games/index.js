import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tictactoe from './Tictactoe/Tictactoe';
import GameFivechess from './Fivechess/Fivechess';
import Lightning from './Lightning/Lightning';
import './games.less';

// class Games extends React.Component {
//   render() {
//     return (
//       <div className="g-games">
//         <Route exact path={`${this.props.match.url}/tictactoe`} component={Tictactoe}/>
//         {/* <Route exact path={`${this.props.match.url}/fivechess`} component={Fivechess}/>
//         <Route exact path={`${this.props.match.url}/lightning`} component={Lightning}/> */}
//         {/* <Route exact path={`${this.props.match.url}/games`} component={Games}/>
//         <Route exact path={`${this.props.match.url}/ranks`} component={Ranks}/>
//         <Route exact path={`${this.props.match.url}/developer`} component={Developer}/> */}
//         {/* <Route exact path="/games" component={Games} /> */}
//       </div>
//     );
//   }
// }

const Games = props => {
  const { match } = props;
  return (
    <div className="g-games">
      <Route exact path={`${match.url}/tictactoe`} component={Tictactoe} />
      <Route exact path={`${match.url}/fivechess`} component={GameFivechess} />
      <Route exact path={`${match.url}/lightning`} component={Lightning} />
      {/* <Route exact path={`${this.props.match.url}/games`} component={Games}/>
      <Route exact path={`${this.props.match.url}/ranks`} component={Ranks}/>
      <Route exact path={`${this.props.match.url}/developer`} component={Developer}/> */}
      {/* <Route exact path="/games" component={Games} /> */}
    </div>
  );
};

Games.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string
  }).isRequired
};

export default Games;
