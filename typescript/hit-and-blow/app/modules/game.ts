import { createSlice, PayloadAction } from "redux-starter-kit";
import { Result, Log } from "./type";

const initialAvailableNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

type State = {
  digits: number;
  available_numbers: number[];
  turn: number;
  logs: Log[];
  result_numbers: number[];
  end: boolean;
};

const initialState: State = {
  digits: 3,
  available_numbers: initialAvailableNumbers,
  turn: 1,
  logs: [],
  result_numbers: generateRandomNumbers(3, initialAvailableNumbers),
  end: false
};

const gameModule = createSlice({
  name: "game",
  initialState,
  reducers: {
    newGame: (state, action: PayloadAction<number>) => {
      state.digits = action.payload;
      state.turn = 1;
      state.logs = [];
      state.result_numbers = generateRandomNumbers(action.payload, state.available_numbers);
      state.end = false;
    },
    call: (state, action: PayloadAction<number[]>) => {
      if (action.payload.length !== state.digits) {
        return;
      }
      const result = check(action.payload, state.result_numbers);
      state.logs.push({ turn: state.turn, call_number: action.payload, result });
      if (result.hit === state.digits) {
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

function generateRandomNumbers(length: number, available_numbers: number[]) {
  const arr = [];
  while (arr.length < length) {
    const r = available_numbers[Math.floor(Math.random() * available_numbers.length)];
    if (!arr.includes(r)) {
      arr.push(r);
    }
  }
  return arr;
}
