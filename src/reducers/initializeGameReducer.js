const InitializeGame = (state = {players: 2, radius: 9, nutrientDensity:2}, action) => {
  // if (this.state === {}) {
  //   this.setState({
  //     players: 2,
  //     radius: 8,
  //     nutrientDensity: 2
  //   })
  // }
  switch(action.type) {
    case "PLAYER_NUMBER_SELECTED":
      return Object.assign({}, state, {players: action.payload});
      break;
    case "BOARD_SIZE_SELECTED":
      return Object.assign({}, state, {radius: action.payload});
      break;
    case "NUTRIENT_DENSITY_SELECTED":
      return Object.assign({}, state, {nutrientDensity: action.payload});
      break;
    default:
      return state;
  }
}

export default InitializeGame;
