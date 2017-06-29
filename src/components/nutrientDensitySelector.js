import React, {Component} from "react";

class NutrientDensitySelector extends Component {

  render() {

    const possibleNutrientDensities = [
                                {desc: "sparse", nutrientDensity: 1},
                                {desc: "average", nutrientDensity: 2},
                                {desc: "abundant", nutrientDensity: 4}
                              ];

    const nutrientDensityButton = possibleNutrientDensities.map((density) => {
      let namedClass = density.nutrientDensity === this.props.InitializeGame.nutrientDensity ? "newGameSelection" : "";
      return <button key={density.desc} className={namedClass} onClick={() => {this.props.selectNutrientDensity(density.nutrientDensity)}}>{density.desc}</button>
    })

    return (
      <div className="nutrient-density-selector">
        <h2>Nutrient Density</h2>
        {nutrientDensityButton}
      </div>
    )
  }

}

export default NutrientDensitySelector;
