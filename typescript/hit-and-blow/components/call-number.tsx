import React, { Dispatch, SetStateAction } from "react";
import { NextComponentType, NextPageContext } from "next";

type Props = {
  numbers: number[];
  setNumbers: Dispatch<SetStateAction<any[]>>;
  end: boolean;
  length: number;
  available_numbers: number[];
};

const CallNumber: NextComponentType<NextPageContext, {}, Props> = ({
  numbers,
  setNumbers,
  end,
  length,
  available_numbers
}) => {
  const selectNumbers = (num: number) => {
    if (numbers.length === length) {
      return;
    }

    if (numbers.includes(num)) {
      return;
    }

    const nums = numbers.concat();
    nums.push(num);
    setNumbers(nums);
  };

  return (
    <>
      <div className="buttons has-addons is-centered">
        {[...Array(length)].map((_, i) => {
          return (
            <button className="button is-dark is-large" key={i} disabled>
              {numbers[i] !== undefined ? numbers[i] : " "}
            </button>
          );
        })}
      </div>
      <div className="buttons has-addons is-centered">
        {available_numbers.map(i => (
          <button key={i} className="button is-medium" onClick={() => selectNumbers(i)} disabled={end}>
            {i}
          </button>
        ))}
      </div>
    </>
  );
};

export default CallNumber;
