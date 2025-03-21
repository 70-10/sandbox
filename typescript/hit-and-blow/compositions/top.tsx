import React, { useState } from "react";
import { NextComponentType } from "next";
import { useGameItem } from "../app/store";
import { useDispatch } from "react-redux";
import gameModule from "../app/modules/game";

import CallNumber from "../components/call-number";
import LogTable from "../components/log-table";

const Top: NextComponentType = () => {
  const { turn, logs, end, digits, available_numbers } = useGameItem();
  const dispatch = useDispatch();

  const [numbers, setNumbers] = useState([]);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="buttons is-centered">
                <button
                  className="button"
                  onClick={() => {
                    dispatch(gameModule.actions.newGame(3));
                    setNumbers([]);
                  }}
                >
                  New Game(3 digits)
                </button>
                <button
                  className="button"
                  onClick={() => {
                    dispatch(gameModule.actions.newGame(4));
                    setNumbers([]);
                  }}
                >
                  New Game(4 digits)
                </button>
                <button
                  className="button"
                  onClick={() => {
                    dispatch(gameModule.actions.newGame(5));
                    setNumbers([]);
                  }}
                >
                  New Game(5 digits)
                </button>
              </div>

              <CallNumber
                numbers={numbers}
                setNumbers={setNumbers}
                end={end}
                length={digits}
                available_numbers={available_numbers}
              />

              <div className="buttons has-addons is-centered">
                <button
                  className="button"
                  disabled={end}
                  onClick={() => {
                    dispatch(gameModule.actions.call(numbers));
                    setNumbers([]);
                  }}
                >
                  Call
                </button>
                <div className="button" onClick={() => setNumbers([])}>
                  Clear
                </div>
              </div>
            </div>
            <div className="column">
              <h2 className="subtitle">{turn ? `Turn: ${turn}` : ""}</h2>

              <LogTable logs={logs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Top;
