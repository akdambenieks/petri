import {connect} from "react-redux";
import SkipButton from "../components/skipButton";
import {skipTurn} from "../actions/gameActions";

const mapStateToProps = state => {
  return {
    Game: state.Game
  }
}

const mapDispatchToProps = dispatch => {
  return {skipTurn: () => {
      dispatch(skipTurn())
    }
  }
}

const skipButton = connect( mapStateToProps,
                                      mapDispatchToProps)(SkipButton)

export default skipButton;
