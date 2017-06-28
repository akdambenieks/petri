const InitializeGame = (state={players: 2, radius: 8, nutrientDensity:2}, action) => {
  // if (this.state === {}) {
  //   this.setState({
  //     players: 2,
  //     radius: 8,
  //     nutrientDensity: 2
  //   })
  // }
  switch(action.type) {
    case "PLAYER_NUMBER_SELECTED":
      return action.payload;
    default:
      return state;
  }
}

export default InitializeGame;
