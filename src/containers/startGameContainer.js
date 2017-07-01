import {connect} from "react-redux";
import StartGameButton from "../components/startGameButton";
import {startGame} from "../actions/gameActions";
import {resizingCanvas} from "../actions/renderingActions";


const mapStateToProps = state => {
  return {
    InitializeGame: state.InitializeGame
  }
}

const mapDispatchToProps = dispatch => {
  return {startGame: (initialGame) => {
      dispatch(startGame(initialGame))
    },
    resizingCanvas: () => {
      dispatch(resizingCanvas())
    }
  }
}

const StartGame = connect( mapStateToProps,
                                      mapDispatchToProps)(StartGameButton)

export default StartGame;
