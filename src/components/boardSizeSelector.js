import React, {Component} from "react";

class BoardSizeSelector extends Component {

  render() {

    const possibleBoardSizes = [
                                {size: "small", radius: 6},
                                {size: "medium", radius: 9},
                                {size: "large", radius: 12}
                              ];

    const boardSizeButton = possibleBoardSizes.map((size) => {
      let namedClass = size.radius === this.props.InitializeGame.radius ? "newGameSelection" : "";
      return <button key={size.size} className={namedClass} onClick={() => {this.props.selectBoardSize(size.radius)}}>{size.size}</button>
    })

    return (
      <div className="board-size-selector">
        <h2>Size of Board</h2>
        {boardSizeButton}
      </div>
    )
  }

}

export default BoardSizeSelector;
