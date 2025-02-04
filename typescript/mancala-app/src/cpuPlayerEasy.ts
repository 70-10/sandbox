import { MancalaGame } from "./game";
import { CpuPlayer } from "./cpuPlayer";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class CpuPlayerEasy extends CpuPlayer {
  constructor(name: string = "CPU (Easy)") {
    // 仮の値で初期化。実際は game の生成時に各プレイヤーの範囲が設定されるので、ここでは後から上書きされます。
    super(name, "cpu", 0, 0, 0);
  }
  async takeTurn(game: MancalaGame): Promise<void> {
    const validMoves = game.getValidMoves();
    if (validMoves.length === 0) return;

    // ランダムに有効な手から選択
    const randomIndex = Math.floor(Math.random() * validMoves.length);
    const selectedPocket = validMoves[randomIndex];

    // 現在の CPU 自身の pocketStart を使って出力する
    console.log(
      `${this.name} はポケット ${
        selectedPocket - this.pocketStart + 1
      } を選択しました。\n`
    );

    const extraTurn = game.move(selectedPocket);
    game.printBoard();

    if (extraTurn) {
      console.log(
        `${this.name} はゴールに最後の石を置いたので、もう一度 ${this.name} の番です。\n`
      );
      await this.takeTurn(game);
    } else {
      console.log("ターンが交代しました。\n");
    }

    await delay(100);
  }
}
