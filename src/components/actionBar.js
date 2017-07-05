import React, {Component} from "react";
import PlayerNumberSelector from "../containers/playerNumberSelectorContainer";
import BoardSizeSelector from "../containers/boardSizeSelectorContainer";
import NutrientDensitySelector from "../containers/nutrientDensitySelectorContainer";
import StartGame from "../containers/startGameContainer";
import MoveButton from "../containers/moveButtonContainer";
import SkipButton from "../containers/skipButtonContainer";
import DivideButton from "../containers/divideButtonContainer";
import BudButton from "../containers/budButtonContainer";

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
      let divideButton = this.props.Game.activeColony.m > 1 ? <DivideButton /> : '';
      let budButton = this.props.Game.activeColony.m > 1 ? <BudButton /> : '';
      actionBarContents = ( <div className="action-bar">
                              <MoveButton />
                              <SkipButton />
                              {divideButton}
                              {budButton}
                            </div>);
        // <div>
        //   <h2>Game Started</h2>
        //   <p>Player {this.props.Game.activeColony.p}'s Turn</p>
        //   <p>Active Colony Size: {this.props.Game.activeColony.m}</p>
        //   <MoveButton />
        //   <SkipButton />
        //   <DivideButton />
        //   <BudButton />
        // </div>

    }

    return (
      <div>
        {actionBarContents}
      </div>
    )
  }

}

export default ActionBar;
