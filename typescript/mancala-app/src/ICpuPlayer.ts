import { MancalaGame } from "./game";

/**
 * CPU プレイヤーのインターフェース。
 * CPU のターンを実行するための takeTurn メソッドを提供します。
 */
export interface ICpuPlayer {
  /**
   * 現在のゲーム状態に対して CPU のターンを実行します。
   * @param game MancalaGame のインスタンス
   */
  takeTurn(game: MancalaGame): Promise<void>;
}
