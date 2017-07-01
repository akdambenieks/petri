import React, {Component} from "react";

class StartGameButton extends Component {

  render() {

    const initialGame = {players: this.props.InitializeGame.players,
                        radius: this.props.InitializeGame.radius,
                        nutrientDensity: this.props.InitializeGame.nutrientDensity};

    return (
        <button key="start-game" className="start-game" onClick={() => {this.props.startGame(initialGame);
                                                                        this.props.resizingCanvas()}}>Start Game</button>
    )
  }

}

export default StartGameButton;
