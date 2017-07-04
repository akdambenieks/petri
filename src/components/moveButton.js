import React, {Component} from "react";

class MoveButton extends Component {

  render() {

    return (
        <button key="move-button" className="move-button" onClick={() => {this.props.moveColony()}}>Move</button>
    )
  }

}

export default MoveButton;
