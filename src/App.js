import React, { Component } from 'react';
import $ from 'jquery';
import ActionBar from './containers/actionBarContainer';
import Canvas from './containers/canvasContainer';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <ActionBar />
        <Canvas />
      </div>
    );
  }
}

export default App;
