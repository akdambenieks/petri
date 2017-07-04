import {connect} from "react-redux";
import ValidTarget from "../components/validTarget";
import {validTargetSelected} from "../actions/gameActions";



const mapStateToProps = state => {
  return {
    Game: state.Game
  }
}

const mapDispatchToProps = dispatch => {
  return {validTargetSelected: (target) => {
      dispatch(validTargetSelected(target))
    }
  }
}

const validTarget = connect( mapStateToProps,
                                      mapDispatchToProps)(ValidTarget)

export default validTarget;
