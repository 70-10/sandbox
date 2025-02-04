import { MancalaGame } from "./game";
import { CpuPlayer } from "./cpuPlayer";

const INFINITY = 1000000;

function cloneGame(game: MancalaGame): MancalaGame {
  const newGame = new MancalaGame(game.pocketsCount);
  // board は数値の配列なので浅いコピーでOK
  newGame.board.board = [...game.board.board];
  newGame.currentPlayer =
    game.currentPlayer === game.playerA ? newGame.playerA : newGame.playerB;
  return newGame;
}

function evaluate(game: MancalaGame): number {
  if (game.isGameOver()) {
    const winner = game.getWinner();
    if (winner === game.playerB) return INFINITY;
    else if (winner === game.playerA) return -INFINITY;
    else return 0;
  }
  let humanSum = 0;
  for (let i = game.playerA.pocketStart; i <= game.playerA.pocketEnd; i++) {
    humanSum += game.board.get(i);
  }
  let cpuSum = 0;
  for (let i = game.playerB.pocketStart; i <= game.playerB.pocketEnd; i++) {
    cpuSum += game.board.get(i);
  }
  return humanSum - cpuSum;
}

function minimax(
  game: MancalaGame,
  depth: number,
  maximizing: boolean
): { score: number; move: number | null } {
  if (depth === 0 || game.isGameOver()) {
    return { score: evaluate(game), move: null };
  }

  const validMoves = game.getValidMoves();
  if (validMoves.length === 0) {
    return { score: evaluate(game), move: null };
  }

  let bestMove: number | null = null;
  if (maximizing) {
    let maxEval = -INFINITY;
    for (const move of validMoves) {
      const newGame = cloneGame(game);
      const extraTurn = newGame.move(move);
      let evalScore: number;
      if (extraTurn) {
        evalScore = minimax(newGame, depth - 1, true).score;
      } else {
        evalScore = minimax(newGame, depth - 1, false).score;
      }
      if (evalScore > maxEval) {
        maxEval = evalScore;
        bestMove = move;
      }
    }
    return { score: maxEval, move: bestMove };
  } else {
    let minEval = INFINITY;
    for (const move of validMoves) {
      const newGame = cloneGame(game);
      const extraTurn = newGame.move(move);
      let evalScore: number;
      if (extraTurn) {
        evalScore = minimax(newGame, depth - 1, false).score;
      } else {
        evalScore = minimax(newGame, depth - 1, true).score;
      }
      if (evalScore < minEval) {
        minEval = evalScore;
        bestMove = move;
      }
    }
    return { score: minEval, move: bestMove };
  }
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class CpuPlayerMinimax extends CpuPlayer {
  depth: number;
  constructor(depth: number = 5, name: string = "CPU (Minimax)") {
    // 仮の値で初期化。実際は game の生成時に各プレイヤーの範囲が設定されるので、ここでは後から上書きされます。
    super(name, "cpu", 0, 0, 0);
    this.depth = depth;
  }

  async takeTurn(game: MancalaGame): Promise<void> {
    // ※この CPU が担当すべき範囲は、game.playerB または game.playerA に既に設定されているはずです。
    const { move } = minimax(
      game,
      this.depth,
      game.currentPlayer === game.playerB
    );
    if (move === null) return;

    console.log(
      `${this.name} はポケット ${
        move - this.pocketStart + 1
      } を選択しました。\n`
    );

    const extraTurn = game.move(move);
    game.printBoard();

    if (extraTurn) {
      console.log(
        `${this.name} はゴールに最後の石を置いたので、もう一度 ${this.name} の番です。\n`
      );
      await this.takeTurn(game);
    } else {
      console.log("ターンが交代しました。\n");
    }

    await delay(1000);
  }
}
