import { NextComponentType } from "next";
import { useGameItem } from "../app/store";
import { useDispatch } from "react-redux";
import gameModule from "../app/modules/game";

const GameSettings: NextComponentType = () => {
  const { digits, available_numbers } = useGameItem();
  const dispatch = useDispatch();

  return (
    <>
      {" "}
      <div className="field">
        <div className="control">
          <label className="label">Digits</label>
          <div className="buttons has-addons">
            {[3, 4, 5].map(i => {
              if (i === digits) {
                return (
                  <button
                    key={i}
                    className="button is-link is-selected"
                    onClick={() => dispatch(gameModule.actions.setDigits(i))}
                  >
                    {i}
                  </button>
                );
              }
              return (
                <button key={i} className="button" onClick={() => dispatch(gameModule.actions.setDigits(i))}>
                  {i}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label className="label">Available numbers</label>
          <div className="buttons has-addons">
            {[...Array(16)].map((_, i) => {
              if (available_numbers.includes(i)) {
                return (
                  <button key={i} className="button is-primary is-selected">
                    {i}
                  </button>
                );
              }
              return (
                <button key={i} className="button">
                  {i}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameSettings;
