import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/* eslint-disable */
class Test extends Component {
  static propTypes = {
    // list: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     email: PropTypes.string,
    //     html_url: PropTypes.string,
    //     name: PropTypes.string,
    //     avatar_url: PropTypes.string,
    //     score: PropTypes.number
    //   })
    // ).isRequired,
    test: PropTypes.number.isRequired,
    setTest: PropTypes.func.isRequired,
    getTest: PropTypes.func.isRequired
  };

  constructor(...args) {
    super(...args);

    this.isLoad = false;
  }

  componentWillMount() {}

  componentDidMount() {
    // const { onGetRankingList } = this.props;
    // onGetRankingList();
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
  }

  render() {
    // console.log(this.props);
    const { test, setTest, getTest } = this.props;
    // console.log(test);
    return (
      <div className="store-test">
        <p>{test}</p>
        <button type="button" onClick={() => setTest(test + 1)}>
          setTest
        </button>
        <button type="button" onClick={() => getTest()}>
          getTest
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    // test: state.present.test.test
    test: state.test.test
  };
};

const mapDispatchToProps = dispatch => ({
  // setTest: data => dispatch({ type: 'SET_TEST_TEST', data }),
  setTest: dispatch.test.setTest,
  getTest: dispatch.test.getTest
  // onGetRankingList: () => dispatch({ type: 'GET_RANKLING_LIST' })
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
/* eslint-enable */
