import { combineReducers } from "redux-starter-kit";
import gameModule from "./modules/game";

const rootReducer = combineReducers({
  game: gameModule.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
