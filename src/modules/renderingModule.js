export const getCartCoordOfCenterFromHexCoord = (hex, canvasCenter, hexSideLength) => {
  let cartCoord = {x: canvasCenter.x + (hexSideLength*Math.sqrt(3)*(hex.q + hex.r/2)),
    y: canvasCenter.y + (hexSideLength*3/2*hex.r)};
    return cartCoord;
}

export const getHexPointsFromHexCoord = (hex, canvasCenter, hexSideLength) => {
  let vertices = [];
  let cartCoord = getCartCoordOfCenterFromHexCoord(hex, canvasCenter, hexSideLength)
  for (let i = 0; i < 6; i++) {
    let rads = Math.PI / 180 * (30 + 60 * i);
    let x = cartCoord.x + hexSideLength * Math.cos(rads);
    let y = cartCoord.y + hexSideLength * Math.sin(rads);
    vertices.push([x, y]);
  }
  return vertices.join(' ');
}
