import {connect} from "react-redux";
import Canvas from "../components/canvas";
import {resizingCanvas} from "../actions/renderingActions";

const mapStateToProps = state => {
  return {
    Initialize: state.InitializeGame,
    Game: state.Game,
    Rendering: state.Rendering
  }
}

const mapDispatchToProps = dispatch => {
  return {
          resizingCanvas: () => {
            dispatch(resizingCanvas())
          }
  }
}

const canvas = connect(mapStateToProps, mapDispatchToProps)(Canvas)

export default canvas;
