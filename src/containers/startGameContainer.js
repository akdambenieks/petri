import {connect} from "react-redux";
import StartGameButton from "../components/startGameButton";
import {startGame} from "../actions/gameActions";


const mapStateToProps = state => {
  return {
    InitializeGame: state.InitializeGame
  }
}

const mapDispatchToProps = dispatch => {
  return {startGame: (initialGame) => {
      dispatch(startGame(initialGame))
    }
  }
}

const StartGame = connect( mapStateToProps,
                                      mapDispatchToProps)(StartGameButton)

export default StartGame;
