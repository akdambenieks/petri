import {combineReducers} from "redux";
import GameSetup from "./reducerGameSetup";

const combinedReducer = combineReducers({
  GameSetup: GameSetup
});

export default combinedReducer;
