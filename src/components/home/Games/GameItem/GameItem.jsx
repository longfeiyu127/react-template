import React from 'react';
import PropTypes from 'prop-types';
import './GameItem.less';

export default class GameItem extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    itemData: PropTypes.shape({
      abstract: PropTypes.string,
      title: PropTypes.string,
      path: PropTypes.string
    }).isRequired,
    img: PropTypes.string.isRequired
  };

  constructor(...props) {
    super(...props);
    this.state = {};
  }

  render() {
    // console.log(this.props);
    const { itemData, img, history } = this.props;
    const { title, abstract, path } = itemData;
    return (
      <div className="home-TabItem">
        <img className="TabItem-banner" src={img} alt="icon" />
        <div className="TabItem-content">
          <h5 className="title">{title}</h5>
          <p>{abstract}</p>
        </div>
        <div className="TabItem-button" onClick={() => history.push(path)}>
          打开
        </div>
      </div>
    );
  }
}
