import React, { Component } from 'react';
import $ from 'jquery';
import ActionBar from './components/actionBar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      boardRadius: 0,
      players: 0,
      nutrientDensity: 0,
      board: [],
      colonies: [],
      activeColony: {},
      nutrients: [],
      directionsMatrix: [],
      gameState: undefined
    }
  }

  componentDidMount() {
    this.setState({directionsMatrix: [
                                      {q: -1, r: 0, s: 1},
                                      {q: 0, r: -1, s: 1},
                                      {q: 1, r: -1, s: 0},
                                      {q:1, r: 0, s: -1},
                                      {q: 0, r: 1, s: -1},
                                      {q: -1, r: 1, s: 0}
                                    ],
                    gameState: 'start',
                    players: 2,
                    boardRadius: 8,
                    nutrientDensity: 2
    });
  }

  render() {
    return (
      <div className="App">
        Petri
        <ActionBar gameState={this.state.gameState}
                   players={this.state.players}
                   boardRadius={this.state.boardRadius}
                   nutrientDensity={this.state.nutrientDensity}/>
      </div>
    );
  }
}

export default App;
