import React, { Component } from 'react';
// import React from 'react';
import { Icon } from 'antd-mobile';
// import Test from './containers/test/index';
import logo from './assets/svg/logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 1,
      test2: 1
    };
  }
/* eslint-disable */
  // componentDidMount() {
  //   let { test } = this.state;
  //   console.log('1', this.state.test);
  //   this.setState({
  //     test: this.state.test + 1,
  //     test2: this.state.test2 + 1
  //   });
  //   this.setState({
  //     test: this.state.test + 2
  //   });
  //   this.setState({
  //     test: this.state.test + 3
  //   });
  //   setTimeout(() => {
  //     console.log('3', this.state.test);
  //     this.setState({
  //       test: this.state.test + 1
  //     });
  //   }, 0);
  //   setTimeout(() => {
  //     console.log('4', this.state.test);
  //     this.setState({
  //       test: this.state.test + 1
  //     });
  //   }, 0);
  //   Promise.resolve().then(() => {
  //     console.log('5', this.state.test);
  //     this.setState({
  //       test: this.state.test + 1
  //     });
  //   });
  //   Promise.resolve().then(() => {
  //     console.log('6', this.state.test);
  //     this.setState({
  //       test: this.state.test + 1
  //     });
  //   });
  // }
/* eslint-emable */
  render() {
    const { test, test2 } = this.state;
    // console.log(test, test2);
    return (
      <div className="App">
        <header className="App-header">
          <Icon type="check" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="test" alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <p>{test}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// const App = () => (
//   <div className="App">
//     <header className="App-header">
//       <Icon type="check" />
//       <img src={logo} className="App-logo" alt="logo" />
//       <img src={logo} className="test" alt="logo" />
//       <p>
//         Edit test
//         <code>src/App.js</code>
//         and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//       {/* <Test /> */}
//     </header>
//   </div>
// );

export default App;
