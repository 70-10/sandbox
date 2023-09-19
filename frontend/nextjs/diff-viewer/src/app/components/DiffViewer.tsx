"use client";
import { FC, Fragment, useState } from "react";
import { diffLines } from "diff";

type DiffResult = {
  added?: boolean;
  removed?: boolean;
  value: string;
};

const DiffViewer: FC = () => {
  const [text1, setText1] = useState<string>("");
  const [text2, setText2] = useState<string>("");
  const [diffs, setDiffs] = useState<DiffResult[]>([]);

  const calculateDiff = () => {
    const result = diffLines(text1, text2);
    setDiffs(result);
  };

  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold p-5">Diff Viewer</h1>
      <div className="p-4">
        <div className="flex mb-4 space-x-4">
          <textarea
            className="border p-2 flex-1 h-96"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder="Text 1"
          />
          <textarea
            className="border p-2 flex-1 h-96"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            placeholder="Text 2"
          />
        </div>
        <button
          className="bg-blue-500 text-white p-2 px-10 rounded"
          onClick={calculateDiff}
        >
          Diff
        </button>

        <pre className="border mt-4 p-4 whitespace-pre-wrap">
          {diffs.map((part, index) => {
            const lines = part.value
              .replace(/\n$/, "")
              .split("\n")
              .map((line, lineIndex) => {
                if (part.added) {
                  return (
                    <div
                      key={`${index}-${lineIndex}`}
                      className="bg-green-100 text-green-700"
                    >
                      + {line}
                    </div>
                  );
                }
                if (part.removed) {
                  return (
                    <div
                      key={`${index}-${lineIndex}`}
                      className="bg-red-100 text-red-700"
                    >
                      - {line}
                    </div>
                  );
                }
                return (
                  <div key={`${index}-${lineIndex}`} className="">
                    {line}
                  </div>
                );
              });

            return <Fragment key={index}>{lines}</Fragment>;
          })}
        </pre>
      </div>
    </main>
  );
};

export default DiffViewer;
