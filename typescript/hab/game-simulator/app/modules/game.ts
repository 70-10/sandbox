import { createSlice, PayloadAction } from "redux-starter-kit";

type State = {
  digits: number;
  available_numbers: number[];
};

const initialState: State = {
  digits: 3,
  available_numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
};

const gameModule = createSlice({
  name: "game",
  initialState,
  reducers: {
    setDigits: (state, action: PayloadAction<number>) => {
      state.digits = action.payload;
    }
  }
});

export default gameModule;
