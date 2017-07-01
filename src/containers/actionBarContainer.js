import {connect} from "react-redux";
import ActionBar from "../components/actionBar";

const mapStateToProps = state => {
  return {
    Game: state.Game
  }
}

const actionBar = connect(mapStateToProps)(ActionBar)

export default actionBar;
