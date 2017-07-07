import React, { Component } from 'react';
import NewGame from './containers/initializeNewGameContainer';
import Canvas from './containers/canvasContainer';
import Banner from './components/banner';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Banner />
        <NewGame />
        <Canvas />
      </div>
    );
  }
}

export default App;
