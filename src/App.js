/* @flow */

import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import './App.css';

type Props = {};

class App extends Component<Props> {
  render() {
    const subtitle: string = 'This is subtitle';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className={styles.app}>{subtitle}</p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
