import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class ActionBar extends Component {

  render() {
    return (
      <ul>
        <li>Players: {this.props.GameSetup.players}</li>
        <li>Radius: {this.props.GameSetup.radius}</li>
        <li>NutrientDensity: {this.props.GameSetup.nutrientDensity}</li>
      </ul>
    )
  }

}

function mapStateToProps(state) {
  console.log(state.GameSetup);
  return {
    GameSetup: state.GameSetup
  }
}

export default connect(mapStateToProps)(ActionBar);
