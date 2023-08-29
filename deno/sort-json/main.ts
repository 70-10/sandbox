import { sortObjectByKey } from "./sort.ts";

// Denoを使用してJSONファイルを読み込む
async function readJsonFile(filepath: string): Promise<any> {
  const data = await Deno.readTextFile(filepath);
  return JSON.parse(data);
}

// JSONデータをファイルに保存する
async function writeJsonFile(filepath: string, data: any): Promise<void> {
  const jsonData = JSON.stringify(data, null, 2);
  await Deno.writeTextFile(filepath, jsonData);
}

// main関数
async function main() {
  const inputFileName = Deno.args[0];

  if (!inputFileName) {
    console.error("Please provide an input JSON file.");
    Deno.exit(1);
  }

  try {
    // JSONファイルを読み込む
    const data = await readJsonFile(inputFileName);

    // JSONデータをキーでソート（再帰的に）
    const sortedData = sortObjectByKey(data);

    // ソートされたJSONデータを元のファイルに上書き保存
    await writeJsonFile(inputFileName, sortedData);

    console.log(
      `Successfully sorted and saved the JSON data to ${inputFileName}.`,
    );
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
