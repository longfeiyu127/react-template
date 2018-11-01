import React from 'react';
import { TabBar } from 'antd-mobile';
import PropTypes from 'prop-types';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import './index.less'
// import Routes from '../routes';
// import { routes, Routes } from '../routes';
import Games from './components/games';
import Ranks from './components/ranks';
import Developer from './components/developer';

export default class Home extends React.Component {
  static propTypes = {
    // eslint-disable-next-line
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'games',
      hidden: false
    };
  }

  render() {
    console.log(this.props);
    // console.log(this.props.history);
    // console.log(routes)
    const { history } = this.props;
    const { hidden, selectedTab } = this.state;
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          // unselectedTintColor="#949494"
          tintColor="#108ee9"
          barTintColor="white"
          tabBarPosition="bottom"
          hidden={hidden}
          prerenderingSiblingsNumber={0}
        >
          <TabBar.Item
            title="游戏库"
            key="games"
            icon={<i className="iconfont icon-games" />}
            selectedIcon={<i className="iconfont icon-games icon-selected" />}
            selected={selectedTab === 'games'}
            // badge={1}
            onPress={() => {
              this.setState({ selectedTab: 'games' });
            }}
            data-seed="logId"
          >
            <Games history={history} />
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-ranks" />}
            selectedIcon={<i className="iconfont icon-ranks icon-selected" />}
            title="排行榜"
            key="ranks"
            // badge={'new'}
            selected={selectedTab === 'ranks'}
            onPress={() => {
              this.setState({ selectedTab: 'ranks' });
            }}
            data-seed="logId1"
          >
            <Ranks />
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-developer" />}
            selectedIcon={
              <i className="iconfont icon-developer icon-selected" />
            }
            title="开发者"
            key="developer"
            selected={selectedTab === 'developer'}
            onPress={() => {
              this.setState({ selectedTab: 'developer' });
            }}
          >
            <Developer />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
