import {connect} from "react-redux";
import BudButton from "../components/budButton";
import {budColony} from "../actions/gameActions";

const mapStateToProps = state => {
  return {
    Game: state.Game
  }
}

const mapDispatchToProps = dispatch => {
  return {budColony: () => {
      dispatch(budColony())
    }
  }
}

const budButton = connect(mapStateToProps,
                                      mapDispatchToProps)(BudButton)

export default budButton;
