export const selectPlayerNumber = (number) => {
  return {
    type: "PLAYER_NUMBER_SELECTED",
    payload: number
  };
}

export const selectBoardSize = (size) => {
  return {
    type: "BOARD_SIZE_SELECTED",
    payload: size
  };
}

export const selectNutrientDensity = (density) => {
  return {
    type: "NUTRIENT_DENSITY_SELECTED",
    payload: density
  };
}
