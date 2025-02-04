import { Board } from "./board";
import { Player } from "./player";

export class MancalaGame {
  board: Board;
  playerA: Player;
  playerB: Player;
  currentPlayer: Player;
  pocketsCount: number;

  /**
   * @param pocketsCount 各プレイヤーのポケット数
   * @param initialStones 1ポケットあたりの初期石の数（デフォルト: 4）
   */
  constructor(pocketsCount: number, initialStones = 4) {
    this.pocketsCount = pocketsCount;
    this.board = new Board(pocketsCount, initialStones);
    // Player A (人間): ポケット 0～pocketsCount-1、ゴールは pocketsCount
    this.playerA = new Player(
      "あなた",
      "human",
      0,
      pocketsCount - 1,
      pocketsCount
    );
    // Player B (CPU): ポケット pocketsCount+1～2*pocketsCount、ゴールは 2*pocketsCount+1
    this.playerB = new Player(
      "CPU",
      "cpu",
      pocketsCount + 1,
      2 * pocketsCount,
      2 * pocketsCount + 1
    );
    this.currentPlayer = this.playerA; // 先攻は Player A
  }

  // 現在のプレイヤーのポケットのうち、石が入っているもののインデックス一覧を返す
  getValidMoves(): number[] {
    const moves: number[] = [];
    for (
      let i = this.currentPlayer.pocketStart;
      i <= this.currentPlayer.pocketEnd;
      i++
    ) {
      if (this.board.get(i) > 0) {
        moves.push(i);
      }
    }
    return moves;
  }

  // 指定されたポケットから石を取り、反時計回りに撒く
  // 戻り値: true → 最後の石が現在のプレイヤーのゴールに入ったため、追加ターンが得られる
  move(pocketIndex: number): boolean {
    if (!this.isValidMove(pocketIndex)) {
      throw new Error("無効な手です");
    }
    let stones = this.board.get(pocketIndex);
    this.board.set(pocketIndex, 0);
    let index = pocketIndex;
    const boardSize = this.board.getSize();

    while (stones > 0) {
      index = (index + 1) % boardSize;
      this.board.increment(index);
      stones--;
    }

    // 最後の石が現在のプレイヤーのゴールに入った場合は追加ターン
    if (
      (this.currentPlayer === this.playerA &&
        index === this.playerA.goalIndex) ||
      (this.currentPlayer === this.playerB && index === this.playerB.goalIndex)
    ) {
      return true;
    } else {
      // ターン交代
      this.currentPlayer =
        this.currentPlayer === this.playerA ? this.playerB : this.playerA;
      return false;
    }
  }

  // 現在のプレイヤーのポケット範囲外でないか、かつ石があるかをチェック
  isValidMove(pocketIndex: number): boolean {
    if (
      pocketIndex < this.currentPlayer.pocketStart ||
      pocketIndex > this.currentPlayer.pocketEnd
    ) {
      return false;
    }
    return this.board.get(pocketIndex) > 0;
  }

  // 指定された範囲のポケットがすべて空かどうかをチェックするヘルパー
  private isRangeEmpty(start: number, end: number): boolean {
    for (let i = start; i <= end; i++) {
      if (this.board.get(i) > 0) {
        return false;
      }
    }
    return true;
  }

  // どちらかのプレイヤーのポケットが全て空になったらゲーム終了
  isGameOver(): boolean {
    return (
      this.isRangeEmpty(this.playerA.pocketStart, this.playerA.pocketEnd) ||
      this.isRangeEmpty(this.playerB.pocketStart, this.playerB.pocketEnd)
    );
  }

  // ゲーム終了時の勝者を判定（マンカラ・ベーシックでは、自分のポケットが先になくなった方の勝ち）
  getWinner(): Player | null {
    if (!this.isGameOver()) return null;

    const userEmpty = this.isRangeEmpty(
      this.playerA.pocketStart,
      this.playerA.pocketEnd
    );
    const cpuEmpty = this.isRangeEmpty(
      this.playerB.pocketStart,
      this.playerB.pocketEnd
    );

    if (userEmpty && !cpuEmpty) return this.playerA;
    if (cpuEmpty && !userEmpty) return this.playerB;
    return null;
  }

  printBoard(): void {
    this.board.printBoard(this.playerA, this.playerB);
  }
}
