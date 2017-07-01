import React, {Component} from "react";
import {getHexPointsFromHexCoord} from "../modules/renderingModule";

class BoardHex extends Component {


  render() {

    // const getCartCoordOfCenterFromHexCoord = (hex) => {
    //   let cartCoord = {x: this.props.rendering.canvasCenter.x + (this.props.rendering.hexSideLength*Math.sqrt(3)*(hex.q + hex.r/2)),
    //     y: this.props.rendering.canvasCenter.y + (this.props.rendering.hexSideLength*3/2*hex.r)};
    //     return cartCoord;
    // }

    let coords = this.props.coords;
    let key = coords.q + ',' + coords.r + "," + coords.s;
    let canvasCenter = this.props.rendering.canvasCenter;
    let hexSideLength = this.props.rendering.hexSideLength;
    let hexPoints = getHexPointsFromHexCoord(coords, canvasCenter, hexSideLength);
    let radius = this.props.rendering.hexSideLength;
    return (
      <polygon className="hex" key={key} id={key} points={hexPoints} strokeWidth="1" stroke="blue"/>
    )
  }

}

export default BoardHex;
