import { createSlice, PayloadAction } from "redux-starter-kit";
import { Result, Log } from "./type";

const LENGTH = 3;

type State = {
  turn: number;
  logs: Log[];
  result_numbers: number[];
  end: boolean;
};

const initialState: State = {
  turn: 1,
  logs: [],
  result_numbers: generateRandomNumbers(LENGTH),
  end: false
};

const gameModule = createSlice({
  slice: "game",
  initialState,
  reducers: {
    newGame: state => {
      state.turn = 1;
      state.logs = [];
      state.result_numbers = generateRandomNumbers(LENGTH);
      state.end = false;
    },
    call: (state, action: PayloadAction<number[]>) => {
      if (action.payload.length !== LENGTH) {
        return;
      }
      const result = check(action.payload, state.result_numbers);
      state.logs.push({ turn: state.turn, call_number: action.payload, result });
      if (result.hit === LENGTH) {
        state.end = true;
        return;
      }
      state.turn++;
    }
  }
});

export default gameModule;

function check(expect: number[], actual: number[]): Result {
  let hit = 0;
  let blow = 0;
  expect.forEach((num, i) => {
    if (num === actual[i]) {
      hit++;
      return;
    }
    if (actual.includes(num)) {
      blow++;
      return;
    }
  });

  return { hit, blow };
}

function generateRandomNumbers(length: number) {
  const arr = [];
  while (arr.length < length) {
    const r = Math.floor(Math.random() * 10);
    if (!arr.includes(r)) {
      arr.push(r);
    }
  }
  return arr;
}
