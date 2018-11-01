import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Test extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        email: PropTypes.string,
        html_url: PropTypes.string,
        name: PropTypes.string,
        avatar_url: PropTypes.string,
        score: PropTypes.number
      })
    ).isRequired,
    test: PropTypes.number.isRequired,
    setTest: PropTypes.func.isRequired,
    onGetRankingList: PropTypes.func.isRequired
  };

  constructor(...args) {
    super(...args);

    this.isLoad = false;
  }

  componentWillMount() {}

  componentDidMount() {
    const { onGetRankingList } = this.props;
    onGetRankingList();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    console.log(this.props);
    const { test, list, setTest } = this.props;
    console.log(test);
    console.log(list);
    return (
      <div className="store-test">
        <p>{test}</p>
        <button type="button" onClick={() => setTest(test + 1)}>
          setTest
        </button>
        {/* <div onClick={setTest(test + 1)}>setTest</div> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    test: state.present.test.test,
    list: state.present.ranking.list
  };
};

const mapDispatchToProps = dispatch => ({
  setTest: data => dispatch({ type: 'SET_TEST_TEST', data }),
  onGetRankingList: () => dispatch({ type: 'GET_RANKLING_LIST' })
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
