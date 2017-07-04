import {connect} from "react-redux";
import MoveButton from "../components/moveButton";
import {moveColony} from "../actions/gameActions";

const mapStateToProps = state => {
  return {
    Game: state.Game
  }
}

const mapDispatchToProps = dispatch => {
  return {moveColony: () => {
      dispatch(moveColony())
    }
  }
}

const moveButton = connect( mapStateToProps,
                                      mapDispatchToProps)(MoveButton)

export default moveButton;
