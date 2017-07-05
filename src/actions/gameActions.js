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

export const skipTurn = () => {
  return {
    type: "SKIP_TURN_SELECTED",
    payload: ''
  };
}

export const divideColony = () => {
  return {
    type: "DIVIDE_BUTTON_SELECTED",
    payload: ''
  };
}

export const budColony = () => {
  return {
    type: "BUD_BUTTON_SELECTED",
    payload: ''
  };
}
