import React, {Component} from "react";
import {getCartCoordOfCenterFromHexCoord} from "../modules/renderingModule";

class Nutrient extends Component {


  render() {
    let nutrient = this.props.nutrient;
    let key = 'n' + nutrient.q + 'n' + nutrient.r + "n" + nutrient.s;
    let canvasCenter = this.props.rendering.canvasCenter;
    let hexSideLength = this.props.rendering.hexSideLength;
    let cartCoords = getCartCoordOfCenterFromHexCoord(nutrient, canvasCenter, hexSideLength);
    let radius = this.props.rendering.hexSideLength*0.8;
    let opacity = 0.2*nutrient.d;
    return (
      <circle className="nutrient" key={key} cx={cartCoords.x} cy={cartCoords.y} opacity={opacity} r={radius} />
    )
  }

}

export default Nutrient;
