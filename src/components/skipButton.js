import React, {Component} from "react";

class SkipButton extends Component {

  render() {

    return (
        <button key="skip-button" className="skip-button" onClick={() => {this.props.skipTurn()}}>Skip Turn</button>
    )
  }

}

export default SkipButton;
