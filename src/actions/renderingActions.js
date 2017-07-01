// export const startingToRenderCanvas = () => {
//   return {
//     type: "STARTING_TO_RENDER_CANVAS",
//     payload: ""
//   };
// }

export const resizingCanvas = (radius) => {
  return {
    type: "RESIZING_CANVAS",
    payload: radius
  }
}
