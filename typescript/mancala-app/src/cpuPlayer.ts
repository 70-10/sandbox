import { Player } from "./player";
import { MancalaGame } from "./game";

/**
 * CPU プレイヤーは Player を継承し、takeTurn メソッドを実装します。
 */
export abstract class CpuPlayer extends Player {
  abstract takeTurn(game: MancalaGame): Promise<void>;
}
