import React, {Component} from "react";
import {connect} from "react-redux";
import {startGame} from "../actions/gameActions";
import {resizingCanvas} from "../actions/renderingActions";
import {selectPlayerNumber,
        selectBoardSize,
        selectNutrientDensity} from "../actions/initializeGameActions";
import BoardSizeButton from "../components/boardSizeButton";
import NutrientDensityButton from "../components/nutrientDensityButton";
import PlayerNumberButton from "../components/playerNumberButton";


class NewGame extends Component {
  render() {
    if (this.props.Game.status === "new") {
      const boardSizeArray = [
                          {desc: "small", radius: 6},
                          {desc: "medium", radius: 9},
                          {desc: "large", radius: 12}
                        ];
      const nutrientDensityArray = [
                            {desc: "scarce", density: 1},
                            {desc: "normal", density: 2},
                            {desc: "abundant", density: 4}
                           ];
      const playerNumberArray = [2,3,4,5,6];
      const boardSizeButtons = boardSizeArray.map(size => {
        return <BoardSizeButton desc={size.desc}
                                radius={size.radius}
                                selectedRadius={this.props.Initialize.radius}
                                selectBoardSize={this.props.selectBoardSize}
                />
      });
      const nutrientDensityButtons = nutrientDensityArray.map(nutrient => {
        return <NutrientDensityButton desc={nutrient.desc}
                                density={nutrient.density}
                                selectedDensity={this.props.Initialize.nutrientDensity}
                                selectNutrientDensity={this.props.selectNutrientDensity}
                />
      });
      const playerNumberButtons = playerNumberArray.map(number => {
        return <PlayerNumberButton number={number}
                                selectedNumber={this.props.Initialize.players}
                                selectPlayerNumber={this.props.selectPlayerNumber}
                />
      });
      return (
        <div className="action-bar">
          {playerNumberButtons}
          <hr />
          {boardSizeButtons}
          <hr />
          {nutrientDensityButtons}
          <hr />
          <button key="start-game"
                  className="start-game"
                  onClick={() => {
                                  this.props.startGame(this.props.Initialize);
                                  this.props.resizingCanvas()
                                 }}
          >
            Start Game
          </button>
        </div>
      )
    }
    return null;
  }
}

const mapStateToProps = state => {
  return {
    Game: state.Game,
    Initialize: state.InitializeGame,

  }
}

const mapDispatchToProps = dispatch => {
  return {startGame: (initialGame) => {
      dispatch(startGame(initialGame))
    },
    resizingCanvas: () => {
      dispatch(resizingCanvas())
    },
    selectPlayerNumber: (players) => {
      dispatch(selectPlayerNumber(players))
    },
    selectNutrientDensity: (density) => {
      dispatch(selectNutrientDensity(density))
    },
    selectBoardSize: (size) => {
      dispatch(selectBoardSize(size))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewGame)
