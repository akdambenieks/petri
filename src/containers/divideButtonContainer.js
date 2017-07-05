import {connect} from "react-redux";
import DivideButton from "../components/divideButton";
import {divideColony} from "../actions/gameActions";

const mapStateToProps = state => {
  return {
    Game: state.Game
  }
}

const mapDispatchToProps = dispatch => {
  return {divideColony: () => {
      dispatch(divideColony())
    }
  }
}

const divideButton = connect(mapStateToProps,
                                      mapDispatchToProps)(DivideButton)

export default divideButton;
