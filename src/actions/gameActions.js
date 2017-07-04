export const startGame = (initialGame) => {
  return {
    type: "START_GAME_SELECTED",
    payload: initialGame
  };
}

export const moveColony = () => {
  return {
    type: "MOVE_BUTTON_SELECTED",
    payload: ''
  };
}

export const validTargetSelected = (target) => {
  return {
    type: "VALID_TARGET_SELECTED",
    payload: target
  };
}
