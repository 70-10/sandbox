import type { Player } from "./player";

export class Board {
  pocketsCount: number;
  initialStones: number;
  board: number[];

  /**
   * ボード全体のサイズは「各プレイヤーのポケット数 × 2 + 2（各ゴール1つずつ）」です。
   * Player A のポケットはインデックス 0 ～ pocketsCount-1、ゴールは pocketsCount、
   * Player B のポケットは pocketsCount+1 ～ pocketsCount+pocketsCount、ゴールは 2*pocketsCount+1 となります。
   */
  constructor(pocketsCount: number, initialStones: number) {
    this.pocketsCount = pocketsCount;
    this.initialStones = initialStones;
    const boardSize = 2 * pocketsCount + 2;
    this.board = new Array(boardSize).fill(0);

    // Player A のポケットに初期石を配置（インデックス 0 ～ pocketsCount-1）
    for (let i = 0; i < pocketsCount; i++) {
      this.board[i] = initialStones;
    }
    // Player B のポケットに初期石を配置（インデックス pocketsCount+1 ～ pocketsCount+pocketsCount）
    for (let i = pocketsCount + 1; i < pocketsCount + 1 + pocketsCount; i++) {
      this.board[i] = initialStones;
    }
    // ゴールは初期値 0（Player A: インデックス pocketsCount、Player B: インデックス 2*pocketsCount+1）
    this.board[pocketsCount] = 0;
    this.board[2 * pocketsCount + 1] = 0;
  }

  getSize(): number {
    return this.board.length;
  }

  get(index: number): number {
    return this.board[index];
  }

  set(index: number, value: number): void {
    this.board[index] = value;
  }

  increment(index: number, value: number = 1): void {
    this.board[index] += value;
  }

  // ボードの状態を、各プレイヤーの情報を参照してターミナルに表示
  printBoard(playerA: Player, playerB: Player): void {
    console.log("--------------------------------------------------");
    // Player B (CPU) のゴールはボードの最後のインデックス
    console.log(
      `${playerB.name} のゴール: ${this.board[this.board.length - 1]}`
    );
    // Player B のポケットは、インデックス pocketsCount+1 ～ pocketsCount+pocketsCount（右から左へ表示）
    const cpuPockets = this.board.slice(
      playerB.pocketStart,
      playerB.pocketEnd + 1
    );
    console.log(
      `${playerB.name} のポケット: ` + cpuPockets.reverse().join(" | ")
    );
    // Player A のポケットは、インデックス 0 ～ pocketsCount-1（左から右へ表示）
    console.log(
      `あなたのポケット: ` +
        this.board.slice(playerA.pocketStart, playerA.pocketEnd + 1).join(" | ")
    );
    console.log(`${playerA.name} のゴール: ${this.board[playerA.goalIndex]}`);
    console.log("--------------------------------------------------\n");
  }
}
