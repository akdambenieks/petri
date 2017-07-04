import React, {Component} from "react";
import {getCartCoordOfCenterFromHexCoord} from "../modules/renderingModule";

class ActiveColony extends Component {


  render() {
    const colonyColor = ["red", "blue", "yellow", "orange", "purple", "magenta"];
    let colony = this.props.colony;
    let key = 'a' + colony.q + 'a' + colony.r + 'a' + colony.s;
    let canvasCenter = this.props.rendering.canvasCenter;
    let hexSideLength = this.props.rendering.hexSideLength;
    let cartCoords = getCartCoordOfCenterFromHexCoord(colony, canvasCenter, hexSideLength);
    let radius = 2*Math.sqrt(hexSideLength*colony.m/Math.PI);
    let color = colonyColor[colony.p - 1];
    return (
      <circle className="active-colony" key={key} cx={cartCoords.x} cy={cartCoords.y} fill={color} r={radius} />
    )
  }

}

export default ActiveColony;
