export type Log = {
  turn: number;
  call_number: number[];
  result: Result;
};

export type Result = {
  hit: number;
  blow: number;
};
