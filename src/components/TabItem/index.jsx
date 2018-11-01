import React from 'react';
import PropTypes from 'prop-types';
import './TabItem.less';

export default class Games extends React.Component {
  static propTypes = {
    itemData: PropTypes.objectOf(
      PropTypes.shape({
        title: PropTypes.string,
        abstract: PropTypes.string,
        path: PropTypes.string
      })
    ).isRequired,
    img: PropTypes.string.isRequired
  };

  constructor(...props) {
    super(...props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    // eslint-disable-next-line
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

// export default Games;
