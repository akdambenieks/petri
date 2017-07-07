import React from "react";

const BoardSizeButton = (props) => {
  let namedClass = props.radius === props.selectedRadius ? "board-size-button newGameSelection" : "board-size-button";
  return ( <button key={props.desc}
                 className={namedClass}
                 onClick={() => {props.selectBoardSize(props.radius)}}
         >
           {props.desc}
         </button> )
};

export default BoardSizeButton;
