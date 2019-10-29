import { createSlice, PayloadAction } from "redux-starter-kit";
import { AppThunk } from "../store";

type State = {
  url: string;
};

const initialState: State = { url: "" };

const playerServerModule = createSlice({
  name: "player-server",
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    }
  }
});

export default playerServerModule;

export function setupAsync(): AppThunk {
  return async dispatch => {};
}
