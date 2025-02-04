export class Player {
  name: string;
  type: "human" | "cpu";
  // このプレイヤーのポケットが始まるインデックスと終わるインデックス、ゴールのインデックス
  pocketStart: number;
  pocketEnd: number;
  goalIndex: number;

  constructor(
    name: string,
    type: "human" | "cpu",
    pocketStart: number,
    pocketEnd: number,
    goalIndex: number
  ) {
    this.name = name;
    this.type = type;
    this.pocketStart = pocketStart;
    this.pocketEnd = pocketEnd;
    this.goalIndex = goalIndex;
  }
}
