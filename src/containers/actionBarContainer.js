import {connect} from "react-redux";
import ActionBar from "../components/actionBar";
import {initialize} from "../actions/initializeGameActions";


const mapStateToProps = state => {
  return {
    Game: state.Game
  }
}

// const mapDispatchToProps = dispatch => {
//   return {initialize: () => {
//       dispatch(initialize())
//     }
//   }
// }

// const actionBar = connect( mapStateToProps,
//                                       mapDispatchToProps)(actionBar)
const actionBar = connect(mapStateToProps)(ActionBar)

export default actionBar;
