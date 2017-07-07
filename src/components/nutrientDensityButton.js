import React from "react";

const NutrientDensityButton = (props) => {
  console.log(props);
  let namedClass = props.density === props.selectedDensity ? "nutrient-density-button newGameSelection" : "nutrient-density-button";
  return ( <button key={props.desc}
                 className={namedClass}
                 onClick={() => {props.selectNutrientDensity(props.density)}}
         >
           {props.desc}
         </button> )
};

export default NutrientDensityButton;
