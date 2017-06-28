import React, { Component } from 'react';
import $ from 'jquery';
import PlayerNumberSelector from './containers/playerNumberSelectorContainer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <PlayerNumberSelector />
      </div>
    );
  }
}

export default App;
