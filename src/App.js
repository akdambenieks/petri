import React, { Component } from 'react';
import $ from 'jquery';
import PlayerNumberSelector from './containers/playerNumberSelectorContainer';
import BoardSizeSelector from './containers/boardSizeSelectorContainer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <PlayerNumberSelector />
        <BoardSizeSelector />
      </div>
    );
  }
}

export default App;
