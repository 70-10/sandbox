import { configureStore, Action, Store } from "redux-starter-kit";
import { useSelector } from "react-redux";
import reducer, { RootState } from "./reducer";
import { ThunkAction } from "redux-thunk";

export type ReduxStore = Store<RootState>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export function initStore(state: RootState) {
  return configureStore({
    preloadedState: state,
    reducer
  });
}

export const useGameItem = () => useSelector((state: RootState) => state.game);
export const usePlayerServerItem = () => useSelector((state: RootState) => state.playerServer);
