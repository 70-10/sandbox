import { combineReducers } from "redux-starter-kit";
import playerServerModule from "./modules/player-server";
import gameModule from "./modules/game";

const rootReducer = combineReducers({
  game: gameModule.reducer,
  playerServer: playerServerModule.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
