import {combineReducers} from "redux";
import Game from "./gameReducer";
import InitializeGame from "./initializeGameReducer";

const combinedReducer = combineReducers({
  Game: Game,
  InitializeGame: InitializeGame
});

export default combinedReducer;
