import React, {Component} from "react";
import {getHexPointsFromHexCoord} from "../modules/renderingModule";

class ValidTarget extends Component {


  render() {

    let target = this.props.target;
    let key = 't' + target.q + 't' + target.r + "t" + target.s;
    let canvasCenter = this.props.rendering.canvasCenter;
    let hexSideLength = this.props.rendering.hexSideLength;
    let hexPoints = getHexPointsFromHexCoord(target, canvasCenter, hexSideLength);
    let radius = this.props.rendering.hexSideLength;
    return (
      <polygon className="valid-target" key={key} id={key} points={hexPoints} onClick={() => this.props.validTargetSelected(target)}/>
    )
  }

}

export default ValidTarget;
