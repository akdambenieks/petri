import React from "react";

const PlayerNumberButton = (props) => {
  let namedClass = props.number === props.selectedNumber ? "player-nuber-button newGameSelection" : "player-number-button";
  return ( <button key={props.number}
                 className={namedClass}
                 onClick={() => {props.selectPlayerNumber(props.number)}}
         >
           {props.number}
         </button> )
};

export default PlayerNumberButton;
