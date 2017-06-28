import {connect} from "react-redux";
import PlayerNumberSelector from "../components/playerNumberSelector";
import {selectPlayerNumber} from "../actions/initializeGameActions";


const mapStateToProps = state => {
  return {
    InitializeGame: state.InitializeGame
  }
}

const mapDispatchToProps = dispatch => {
  return {selectPlayerNumber: (number) => {
      dispatch(selectPlayerNumber(number))
    }
  }
}

const playerNumberSelector = connect( mapStateToProps,
                                      mapDispatchToProps)(PlayerNumberSelector)

export default playerNumberSelector;
