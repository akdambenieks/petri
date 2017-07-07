const Game = (state = {status: "new"}, action) => {
  const origin = {q: 0, r: 0, s: 0};
  const directionsMatrix = [
                            {q: -1, r: 0, s: 1},
                            {q: 0, r: -1, s: 1},
                            {q: 1, r: -1, s: 0},
                            {q:1, r: 0, s: -1},
                            {q: 0, r: 1, s: -1},
                            {q: -1, r: 1, s: 0}
                          ];

  // Function that returns whether a given hex is a valid space on the board
  const isValidSpace = (hex, optBoard) => {
    const board = optBoard || state.board;
    return board.find(function(h) {return hex.q === h.q && hex.r === h.r && hex.s === h.s}) !== undefined ? true : false;
  }

  // Function that returns whether a given hex is occupied by any colony
  const isOccupied = (hex, optColonies) => {
    let colonies = optColonies || state.colonies;
    return colonies.find(function(h) { return hex.q === h.q && hex.r === h.r && hex.s === h.s }) !== undefined ? true : false;
  };

  // Function to return an array of valid neighboring hexes to a given hex
  const getNeighboringHexes = (hex) => {
    let neighbors = [];
    let possibleNeighbors = directionsMatrix.map((h) => {
      return {q: h.q + hex.q, r: h.r + hex.r, s: h.s + hex.s}
    });
    possibleNeighbors.forEach((pN) => {
      if (isValidSpace(pN) === true) {
        neighbors.push(pN);
      }
    });
    return neighbors;
  }

  // Function to return an array of hexes within a given range from a given hex
  const getHexesInRange = (hex, range) => {
    let hexesInRange = [];
    let possibleHexesInRange = [];
    for (let q = -range; q <= range; q++) {
      for (let r = (Math.max(-range, -q-range)); r <= Math.min(range, -q+range); r++) {
        let s = -q-r;
        if (!(q === hex.q && r === hex.r && s === hex.s)) {
          possibleHexesInRange.push({q: q, r: r, s: s});
        }
      }
    }
    possibleHexesInRange.forEach((pH) => {
      if (isValidSpace(pH) === true) {
        hexesInRange.push(pH);
      }
    });
    return hexesInRange;
  }

  // Function to return an array of valid hexes that are in a ring at a given
  // radius from a given hex
  const getHexesInRing = (hex, radius, optBoard) => {
    const hexesInRing = [];
    const possibleHexesInRing = [];
    const start = directionsMatrix[4];
    let ringHex = {q: start.q*radius + hex.q, r: start.r*radius + hex.r, s: start.s*radius + hex.s};
    for (let i = 0; i < 6; i++) {
      for (let n = 1; n <= radius; n++) {
        possibleHexesInRing.push(ringHex);
        ringHex = {
                   q: ringHex.q + directionsMatrix[i].q,
                   r: ringHex.r + directionsMatrix[i].r,
                   s: ringHex.s + directionsMatrix[i].s
                 };
      }
    }
    possibleHexesInRing.forEach((pH) => {
      if (isValidSpace(pH, optBoard) === true) {
        hexesInRing.push(pH);
      }
    });
    return hexesInRing;
  }


  // Function to generate possible hex coordinates of board spaces from radius
  const generateBoard = (payload) => {
    let radius = payload.radius;
    let board = [];
    for (let q = -(radius - 1); q <= (radius - 1); q++) {
      for (let r = -(radius - 1); r <= (radius - 1); r++) {
        if (Math.abs(q + r) <= (radius - 1)) {
          board.push({q: q, r: r, s: -q-r});
        }
      }
    }
    return board;
  };

  // Function to place starting colonies randomly on the board given board radius and number of players
  // and randomize the starting turn order
  const addColonies = (payload, optBoard) => {
    let colonies = [];
    let players = payload.players;
    let playerArray = [];
    const board = optBoard || state.board;
    for (let i = 1; i <= players; i++) {
      playerArray.push(i);
    }
    let randomizedPlayerArray = randomizeArray(playerArray);
    let playerPositionRadius = Math.floor(payload.radius*0.75);
    let playerPositionRing = getHexesInRing(origin, playerPositionRadius, board);
    let possibleNumberOfPositions = playerPositionRing.length;
    let rand = Math.floor(Math.random()*possibleNumberOfPositions);
    for (let i = 0; i <= rand; i++) {
      playerPositionRing.push(playerPositionRing.shift());
    }
    for (let n = 0; n < players; n++) {
      let hex = playerPositionRing[Math.floor(n*possibleNumberOfPositions/players)]
      colonies.push({q: hex.q, r: hex.r, s: hex.s, p: randomizedPlayerArray[n], m: 1});
    }
    colonies = randomizeArray(colonies);
    return colonies;
  };

  // Function to return a new randomized array given an array
  const randomizeArray = (array) => {
    let randomizedArray = [];
    let tempArray = array.map((item) => {return item});
    while (tempArray.length > 0) {
      randomizedArray.push(tempArray.splice([Math.floor(Math.random()*tempArray.length)],1)[0]);
    }
    return randomizedArray;
  }

  // Function to add nutrients to the board
  const addNutrients = (payload, optBoard, optColonies) => {
    const board = optBoard || state.board;
    const colonies = optColonies || state.colonies;
    let nutrientDensity = payload.nutrientDensity;
    let radius = payload.radius;
    let nutrients = [];
    let nutrientCount = nutrientDensity * (1 + 6 * radius);
    for (let n = 0; n < nutrientCount; n++) {
      let valid = false;
      let nutrientPosition = undefined;
      while (valid === false) {
        nutrientPosition = board[Math.floor(Math.random()*board.length)];
        if (isOccupied(nutrientPosition, colonies) === false) {
          valid = true;
        }
      }
      let wasNutrientAdded = false;
      nutrients.forEach(function(hex) {
        if (nutrientPosition.q === hex.q && nutrientPosition.r === hex.r && nutrientPosition.s === hex.s) {
          hex.d = hex.d + 1;
          wasNutrientAdded = true;
        }
      })
      if (wasNutrientAdded === false) {
        nutrients.push({q: nutrientPosition.q, r: nutrientPosition.r, s: nutrientPosition.s, d: 1});
      }
    }
    return nutrients;
  }

  // Function to start next turn
  const startNextTurn = (optColonies, optNutrients, updatedColony, newColonies) => {
    let colonies = optColonies || [...state.colonies];
    let nutrients = optNutrients || [...state.nutrients];
    if (updatedColony !== undefined) {
      colonies.push(updatedColony);
    }
    if (newColonies !== undefined) {
      colonies = colonies.concat(newColonies);
    }
    let activeColony = colonies.shift();


    return Object.assign( {},
                          state,
                          {colonies: colonies},
                          {activeColony: activeColony},
                          {turnStage: "selectAction"},
                          {validTargets: []},
                          consumeNutrients(nutrients, activeColony)
                        )

  }

  // Function to consume nutrients if available and grow the colony
  const consumeNutrients = (optNutrients, optActiveColony) => {
    let nutrients = optNutrients || [...state.nutrients];
    let activeColony = optActiveColony || {...state.activeColony};
    let colonySize = activeColony.m;
    let consumable = nutrients.find((nutrient) => {
      return nutrient.q === activeColony.q && nutrient.r === activeColony.r && nutrient.s === activeColony.s;
    })
    let nutrientDensity = 0;
    if (consumable !== undefined) {
      nutrientDensity = consumable.d;
      if (colonySize >= nutrientDensity) {
        colonySize = colonySize + nutrientDensity;
        nutrientDensity = 0;
      } else {
        nutrientDensity = nutrientDensity - colonySize;
        colonySize = colonySize * 2;
      }
    }
    let consumedIndex = nutrients.findIndex((nutrient) => {
      return nutrient.q === activeColony.q && nutrient.r === activeColony.r && nutrient.s === activeColony.s;
    })
    if (consumedIndex !== -1) {
      if (nutrientDensity > 0) {
        nutrients.splice([consumedIndex], 1, Object.assign({}, consumable, {d: nutrientDensity}));
      } else {
        nutrients.splice(consumedIndex, 1);
      }
    }

    return {nutrients: nutrients, activeColony: Object.assign({}, activeColony, {m: colonySize})};
  }


  // Function to divide colony
  const divideColony = (childColonyTargetHex) => {
    let activeColony = {...state.activeColony};
    let parentSize = Math.ceil(activeColony.m/2);
    let childSize = Math.floor(activeColony.m/2);
    let player = activeColony.p;
    let parentColony = Object.assign({}, activeColony, {m: parentSize});
    let childColony = Object.assign({}, childColonyTargetHex, {p: player, m: childSize});
    return {parentColony: parentColony, childColony: childColony};
  }

  // Function to bud off a tiny colony
  const budColony = (budColonyTargetHex) => {
    let activeColony = {...state.activeColony};
    let parentSize = activeColony.m - 1;
    let player = activeColony.p;
    let parentColony = Object.assign({}, activeColony, {m: parentSize});
    let budColony = Object.assign({}, budColonyTargetHex, {p: player, m: 1});
    return {parentColony: parentColony, budColony: budColony};
  }


  switch(action.type) {
    case "START_GAME_SELECTED":
      // generating possible board squares based on action.payload.radius
      const board = generateBoard(action.payload);
      const colonies = addColonies(action.payload, board);
      const nutrients = addNutrients(action.payload, board, colonies);
      return Object.assign( {},
                            state,
                            {board: board},
                            {colonies: colonies},
                            {nutrients: nutrients},
                            startNextTurn(colonies, nutrients),
                            {status: "active"}
                          );

    case "MOVE_BUTTON_SELECTED":
      let validMoves = getNeighboringHexes(state.activeColony);
      return Object.assign( {},
                            state,
                            {turnStage: "moveSelected"},
                            {validTargets: validMoves}
                          );

    case "SKIP_TURN_SELECTED":
      let skippedColony = {...state.activeColony};
      return Object.assign( {},
                            state,
                            startNextTurn(null, null, skippedColony)
                          );

    case "DIVIDE_BUTTON_SELECTED":
      let validDivisionTargets = getNeighboringHexes(state.activeColony);
      return Object.assign( {},
                            state,
                            {turnStage: "divideSelected"},
                            {validTargets: validDivisionTargets}
                          );

    case "BUD_BUTTON_SELECTED":
      let validBudTargets = getNeighboringHexes(state.activeColony);
      return Object.assign( {},
                            state,
                            {turnStage: "budSelected"},
                            {validTargets: validBudTargets}
                          );

    case "VALID_TARGET_SELECTED":
      switch (state.turnStage) {
        case "moveSelected":
          let movedColony = {...state.activeColony, ...action.payload};
          return Object.assign( {},
                                state,
                                {validTargets: []},
                                startNextTurn(null, null, movedColony)
                              );

        case "divideSelected":
          let dividedColonies = divideColony(action.payload);
          return Object.assign( {},
                                state,
                                {validTargets: []},
                                startNextTurn(null, null, dividedColonies.parentColony, [dividedColonies.childColony])
                              );

        case "budSelected":
          let buddedColonies = budColony(action.payload);
          return Object.assign( {},
                                state,
                                {validTargets: []},
                                startNextTurn(null, null, buddedColonies.parentColony, [buddedColonies.budColony])
                              );

        default:
          return state;
        }

    default:
      return state;
  }
}

export default Game;
