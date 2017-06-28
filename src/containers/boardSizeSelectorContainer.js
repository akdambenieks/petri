import {connect} from "react-redux";
import BoardSizeSelector from "../components/boardSizeSelector";
import {selectBoardSize} from "../actions/initializeGameActions";


const mapStateToProps = state => {
  return {
    InitializeGame: state.InitializeGame
  }
}

const mapDispatchToProps = dispatch => {
  return {selectBoardSize: (size) => {
      dispatch(selectBoardSize(size))
    }
  }
}

const boardSizeSelector = connect( mapStateToProps,
                                      mapDispatchToProps)(BoardSizeSelector)

export default boardSizeSelector;
