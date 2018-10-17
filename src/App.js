import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import Main from './components/Main/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Main />
      </div>
    );
  }
}

export default App;
