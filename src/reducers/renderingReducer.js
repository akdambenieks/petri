import $ from "jquery";
const Rendering = (state = {
                              canvasCenter: {x: undefined, y: undefined},
                              hexSideLength: undefined
                           }, action) => {

  const getCanvasCenter = () => {
    return {x: Math.floor($("#canvas").width()/2), y: Math.floor($("#canvas").height()/2)}
  }

  const getHexSideLength = () => {
    let radius = $("#canvas").attr("radius");
    const canvasSideLength = $("#canvas").width() - 40;
    return Math.floor(canvasSideLength/((2*radius - 1)*Math.sqrt(3)));
  }
  
  switch(action.type) {
    case "RESIZING_CANVAS":
      state = Object.assign({}, state, {canvasCenter: getCanvasCenter(), hexSideLength: getHexSideLength()})
      return state;
    default:
      return state;
  }

}

export default Rendering;
