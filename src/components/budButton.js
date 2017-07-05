import React, {Component} from "react";

class BudButton extends Component {

  render() {

    return (
        <button key="bud-button" className="bud-button" onClick={() => {this.props.budColony()}}>Bud</button>
    )
  }

}

export default BudButton;
