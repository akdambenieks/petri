export const selectPlayerNumber = (number) => {
  return {
    type: "PLAYER_NUMBER_SELECTED",
    payload: number
  };
}
