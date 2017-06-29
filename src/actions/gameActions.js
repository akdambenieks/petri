export const startGame = (initialGame) => {
  return {
    type: "START_GAME_SELECTED",
    payload: initialGame
  };
}
