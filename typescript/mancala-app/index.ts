import * as readline from "readline";
import { MancalaGame } from "./src/game";
import { Player } from "./src/player";
import { CpuPlayerMinimax } from "./src/cpuPlayerMinimax";
import { CpuPlayerEasy } from "./src/cpuPlayerEasy";

// ANSI エスケープシーケンス（赤色とリセット）
const RED = "\x1b[31m";
const RESET = "\x1b[0m";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query: string): Promise<string> =>
  new Promise((resolve) => rl.question(query, resolve));

/**
 * 現在のゲーム状態を、ターン数・現在のターン・各ゴール・ポケットの状態を含めて表示する。
 * @param game 現在の MancalaGame
 * @param turnCount 現在のターン数
 * @param highlightedPocket （任意）最後に動かしたポケットのインデックス。存在すれば赤色で表示。
 */
function printGameState(
  game: MancalaGame,
  turnCount: number,
  highlightedPocket?: number
): void {
  const pocketsCount = game.pocketsCount;
  const board = game.board.board;
  const totalSize = board.length;
  const cpuGoalIndex = totalSize - 1; // 2*pocketsCount+1
  const humanGoalIndex = pocketsCount;

  console.log("==================================================");
  console.log(`ターン ${turnCount}`);
  console.log(`現在のターン: ${game.currentPlayer.name}`);
  console.log("--------------------------------------------------");

  // CPU のゴール・ポケット表示（CPU のポケットは右から左に表示）
  console.log(`${game.playerB.name} のゴール: ${board[cpuGoalIndex]}`);
  const cpuPockets = board.slice(
    pocketsCount + 1,
    pocketsCount + 1 + pocketsCount
  );
  const cpuPocketsStr = cpuPockets
    .reverse()
    .map((stones, idx) => {
      // CPU のポケットの場合、実際のインデックスは pocketsCount+1 + (pocketsCount - 1 - idx)
      const actualIndex = pocketsCount + 1 + (pocketsCount - 1 - idx);
      const str = `${stones}`;
      return actualIndex === highlightedPocket ? RED + str + RESET : str;
    })
    .join(" | ");
  console.log(`${game.playerB.name} のポケット: ${cpuPocketsStr}`);

  console.log("--------------------------------------------------");

  // 人間側のポケット・ゴール表示
  const humanPockets = board.slice(0, pocketsCount);
  const humanPocketsStr = humanPockets
    .map((stones, idx) => {
      return idx === highlightedPocket
        ? RED + `${stones}` + RESET
        : `${stones}`;
    })
    .join(" | ");
  console.log(`${game.playerA.name} のポケット: ${humanPocketsStr}`);
  console.log(`${game.playerA.name} のゴール: ${board[humanGoalIndex]}`);
  console.log("==================================================\n");
}

async function handleHumanTurn(
  game: MancalaGame,
  pocketsCount: number,
  turnCount: number
): Promise<number> {
  const validMoves = game.getValidMoves();
  if (validMoves.length === 0) return turnCount;
  const answer = await question(
    `あなたの番です。ポケット番号（1～${pocketsCount}）を入力してください: `
  );
  const moveIndex = parseInt(answer) - 1;
  if (isNaN(moveIndex) || validMoves.indexOf(moveIndex) === -1) {
    console.log("無効な選択です。もう一度入力してください。\n");
    return handleHumanTurn(game, pocketsCount, turnCount);
  }
  console.log(`あなたはポケット ${moveIndex + 1} を選択しました。\n`);
  const extraTurn = game.move(moveIndex);
  turnCount++;
  printGameState(game, turnCount, moveIndex);
  if (extraTurn) {
    console.log("ゴールに最後の石が入りました！もう一度あなたの番です。\n");
    return handleHumanTurn(game, pocketsCount, turnCount);
  } else {
    console.log("ターンが交代しました。\n");
    return turnCount;
  }
}

async function handleCpuTurn(
  game: MancalaGame,
  turnCount: number
): Promise<number> {
  const current = game.currentPlayer;
  if ("takeTurn" in current && typeof current.takeTurn === "function") {
    // CpuPlayer では、内部で出力時に自分が動かしたポケットを表示するので、
    // ここではターン数のみ更新します。
    await current.takeTurn(game);
    turnCount++;
    printGameState(game, turnCount);
    return turnCount;
  } else {
    console.error("CPU の処理が定義されていません。");
    process.exit(1);
  }
}

/**
 * 対戦モードとポケット数をもとにゲームを初期化する。
 * - mode 1: 人間 vs CPU
 * - mode 2: CPU vs CPU
 */
function setupGame(
  mode: number,
  pocketsCount: number
): { game: MancalaGame; humanPlayer: Player | null } {
  const game = new MancalaGame(pocketsCount);
  let humanPlayer: Player | null = null;

  if (mode === 1) {
    // 人間 vs CPU
    humanPlayer = game.playerA;
    const cpu = new CpuPlayerMinimax(5, "CPU");
    cpu.pocketStart = game.playerB.pocketStart;
    cpu.pocketEnd = game.playerB.pocketEnd;
    cpu.goalIndex = game.playerB.goalIndex;
    game.playerB = cpu;
  } else if (mode === 2) {
    // CPU vs CPU
    const originalPlayerA = game.playerA;
    const originalPlayerB = game.playerB;
    const cpu1 = new CpuPlayerMinimax(5, "CPU 1");
    // const cpu2 = new CpuPlayerMinimax(1, "CPU 2");
    const cpu2 = new CpuPlayerEasy("CPU 2");
    cpu1.pocketStart = originalPlayerA.pocketStart;
    cpu1.pocketEnd = originalPlayerA.pocketEnd;
    cpu1.goalIndex = originalPlayerA.goalIndex;
    cpu2.pocketStart = originalPlayerB.pocketStart;
    cpu2.pocketEnd = originalPlayerB.pocketEnd;
    cpu2.goalIndex = originalPlayerB.goalIndex;
    game.playerA = cpu1;
    game.playerB = cpu2;
    humanPlayer = null;
    game.currentPlayer = cpu1;
  } else {
    console.log("無効なモードです。デフォルトで人間 vs CPU とします。");
    humanPlayer = game.playerA;
    const cpu = new CpuPlayerMinimax(5, "CPU");
    cpu.pocketStart = game.playerB.pocketStart;
    cpu.pocketEnd = game.playerB.pocketEnd;
    cpu.goalIndex = game.playerB.goalIndex;
    game.playerB = cpu;
  }
  return { game, humanPlayer };
}

async function main() {
  try {
    const modeInput = await question(
      "対戦モードを選んでください:\n1: 人間 vs CPU\n2: CPU vs CPU\n選択: "
    );
    const mode = parseInt(modeInput);

    const pocketsInput = await question(
      "各プレイヤーのポケット数を入力してください（例: 6）: "
    );
    let pocketsCount = parseInt(pocketsInput);
    if (isNaN(pocketsCount) || pocketsCount < 1) {
      console.log("無効な入力です。デフォルト値 6 を使用します。");
      pocketsCount = 6;
    }

    const { game, humanPlayer } = setupGame(mode, pocketsCount);
    let turnCount = 1;
    printGameState(game, turnCount);

    // ゲームループ
    while (!game.isGameOver()) {
      if (humanPlayer && game.currentPlayer === humanPlayer) {
        turnCount = await handleHumanTurn(game, pocketsCount, turnCount);
      } else {
        turnCount = await handleCpuTurn(game, turnCount);
      }
    }

    console.log("ゲーム終了！");
    const winner = game.getWinner();
    if (humanPlayer && winner === humanPlayer) {
      console.log("おめでとうございます！あなたの勝ちです！");
    } else if (winner === null) {
      console.log("引き分けです。");
    } else {
      console.log(`${winner?.name} の勝ちです。`);
    }
  } catch (error) {
    console.error(error);
  } finally {
    rl.close();
  }
}

main().catch((err) => console.error(err));
