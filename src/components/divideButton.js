import React, {Component} from "react";

class DivideButton extends Component {

  render() {

    return (
        <button key="divide-button" className="divide-button" onClick={() => {this.props.divideColony()}}>Divide</button>
    )
  }

}

export default DivideButton;
