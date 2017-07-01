import React, {Component} from "react";
import BoardHex from "../components/boardHex";
import Nutrient from "../components/nutrient";
import Colony from "../components/colony";
import ActiveColony from "../components/activeColony";


class Canvas extends Component {

  componentDidMount() {
    window.addEventListener("resize", this.props.resizingCanvas);
  }


  render() {

    let boardRender = [];
    if (this.props.Game.status !== "new") {
      // set up board
      let boardHexes = this.props.Game.board.map((coords) => {
        let key = coords.q + ',' + coords.r + "," + coords.s;
        return <BoardHex key={key} coords={coords} rendering={this.props.Rendering} />
      })

      // set up nutrients
      let nutrients = this.props.Game.nutrients.map((nutrient) => {
        let key = "n" + nutrient.q + "," + nutrient.r + "," + nutrient.s;
        return <Nutrient key={key} nutrient={nutrient} rendering={this.props.Rendering} />
      })

      // set up colonies
      let colonies = this.props.Game.colonies.map((colony) => {
        let key = "c" + colony.q + "," + colony.r + "," + colony.s;
        return <Colony key={key} colony={colony} rendering={this.props.Rendering} />
      })

      let activeColony = <ActiveColony colony={this.props.Game.activeColony} rendering={this.props.Rendering} />

      boardRender = boardHexes.concat(nutrients, colonies);
      boardRender.push(activeColony);
    }

    return (
      <svg id="canvas" className="canvas" radius={this.props.Initialize.radius} width="90vmin" height="90vmin" >
        {boardRender}
      </svg>
    )
  }

}

export default Canvas;
