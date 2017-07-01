import {combineReducers} from "redux";
import Game from "./gameReducer";
import InitializeGame from "./initializeGameReducer";
import Rendering from "./renderingReducer";

const combinedReducer = combineReducers({
  Game: Game,
  InitializeGame: InitializeGame,
  Rendering: Rendering
});

export default combinedReducer;
