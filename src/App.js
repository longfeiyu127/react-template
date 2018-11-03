// import React, { Component } from 'react';
import React from 'react';
import { Icon } from 'antd-mobile';
import Test from './containers/test/index';
import logo from './assets/svg/logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <Icon type="check" />
//           <img src={logo} className="App-logo" alt="logo" />
//           <img src={logo} className="test" alt="logo" />
//           <p>
//             Edit
//             <code>src/App.js</code>
//             and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

const App = () => (
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
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Test />
    </header>
  </div>
);

export default App;
