import React, { Component } from 'react';
import $ from 'jquery';
import ActionBar from './containers/actionBarContainer';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <ActionBar />
        {/* <GameBoard /> */}
      </div>
    );
  }
}

export default App;
