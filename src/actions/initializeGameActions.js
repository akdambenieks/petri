export const selectPlayerNumber = (number) => {
  console.log(number);
  return {
    type: "PLAYER_NUMBER_SELECTED",
    payload: number
  };
}
