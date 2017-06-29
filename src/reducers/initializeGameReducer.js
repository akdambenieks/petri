const InitializeGame = (state = {players: 2, radius: 9, nutrientDensity:2}, action) => {
  switch(action.type) {
    case "PLAYER_NUMBER_SELECTED":
      return Object.assign({}, state, {players: action.payload});
    case "BOARD_SIZE_SELECTED":
      return Object.assign({}, state, {radius: action.payload});
    case "NUTRIENT_DENSITY_SELECTED":
      return Object.assign({}, state, {nutrientDensity: action.payload});
    default:
      return state;
  }
}

export default InitializeGame;
