import React, {Component} from "react";

class PlayerNumberSelector extends Component {

  render() {

    const possiblePlayerNumbers = [2,3,4,5,6];

    const playerNumberButton = possiblePlayerNumbers.map((number) => {
      console.log(this.props);
      let namedClass = number === this.props.InitializeGame.players ? "newGameSelection" : "";
      return <button key={number} className={namedClass}>{number}</button>
    })

    return (
      <div className="player-number-selector">
        <h2>Number of Players</h2>
        {playerNumberButton}
      </div>
    )
  }

}

export default PlayerNumberSelector;
