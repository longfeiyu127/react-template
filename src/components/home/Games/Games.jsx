import React from 'react';
import { Tabs, Badge } from 'antd-mobile';
import PropTypes from 'prop-types';
import GameItem from './GameItem/GameItem';
import './Games.less';
import games from '../../../service/config/games.json';

const tabs = [
  { title: <Badge>全部</Badge> },
  { title: <Badge>热门</Badge> },
  // { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
  { title: <Badge>分类</Badge> }
];

export default class HomeGames extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(games);
    // console.log(this.props.history)
    const { history } = this.props;
    const AllGames = games.games.map(item => (
      /* eslint-disable */
      <GameItem
        itemData={item}
        history={history}
        img={require(`../../../assets/images/games/${item.icon}`)}
        key={item.path}
      />
      /* eslint-enable */
    ));
    return (
      <div className="home-games">
        <Tabs
          tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => {
            console.log('onChange', index, tab);
          }}
          onTabClick={(tab, index) => {
            console.log('onTabClick', index, tab);
          }}
        >
          <div>{AllGames}</div>
          <div>{AllGames}</div>
          <div>{AllGames}</div>
        </Tabs>
      </div>
    );
  }
}
