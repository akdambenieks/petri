import React, { Component } from 'react';
import $ from 'jquery';
import PlayerNumberSelector from './containers/playerNumberSelectorContainer';
import BoardSizeSelector from './containers/boardSizeSelectorContainer';
import NutrientDensitySelector from './containers/nutrientDensitySelectorContainer';
import StartGame from './containers/startGameContainer';
import './App.css';

class App extends Component {

  render() {
    let actionBar;
    // switch(this.props.Game.status) {
    //   case "new":
    //   actionBar = ( <div className="action-bar">
    //                   <PlayerNumberSelector />
    //                   <BoardSizeSelector />
    //                   <NutrientDensitySelector />
    //                 </div>);
    //   break
    // }

    return (
      <div className="App">
        {/* {actionBar} */}
        <PlayerNumberSelector />
        <hr />
        <BoardSizeSelector />
        <hr />
        <NutrientDensitySelector />
        <hr />
        <StartGame />
      </div>
    );
  }
}

export default App;
