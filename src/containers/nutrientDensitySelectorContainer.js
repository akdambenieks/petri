import {connect} from "react-redux";
import NutrientDensitySelector from "../components/nutrientDensitySelector";
import {selectNutrientDensity} from "../actions/initializeGameActions";


const mapStateToProps = state => {
  return {
    InitializeGame: state.InitializeGame
  }
}

const mapDispatchToProps = dispatch => {
  return {selectNutrientDensity: (density) => {
      dispatch(selectNutrientDensity(density))
    }
  }
}

const nutrientDensitySelector = connect( mapStateToProps,
                                      mapDispatchToProps)(NutrientDensitySelector)

export default nutrientDensitySelector;
