import React, {Component} from "react";
import PlayerNumberSelector from "../containers/playerNumberSelectorContainer";
import BoardSizeSelector from "../containers/boardSizeSelectorContainer";
import NutrientDensitySelector from "../containers/nutrientDensitySelectorContainer";
import StartGame from "../containers/startGameContainer";

class ActionBar extends Component {

  render() {
    let actionBarContents;
    if (this.props.Game.status === "new") {
      actionBarContents = (
          <div className="action-bar">
            <PlayerNumberSelector />
            <hr />
            <BoardSizeSelector />
            <hr />
            <NutrientDensitySelector />
            <hr />
            <StartGame />
          </div>
        )
    } else if (this.props.Game.status === "active") {
      actionBarContents = (
        <div>
          <h2>Game Started</h2>
          <p>Player: {this.props.Game.activeColony.p}</p>
        </div>
      )
    }

    return (
      <div>
        {actionBarContents}
      </div>
    )
  }

}

export default ActionBar;
