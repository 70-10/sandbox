import React from "react";
import { NextComponentType } from "next";
import GameSettings from "../components/game-settings";
import { usePlayerServerItem } from "../app/store";
import { useDispatch } from "react-redux";
import playerServerModule from "../app/modules/player-server";

const Top: NextComponentType = () => {
  const { url } = usePlayerServerItem();
  const dispatch = useDispatch();
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title">Game simulator</h1>
          <div className="columns">
            <div className="column">
              <GameSettings />
            </div>
            <div className="column">
              <div className="field has-addons">
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Player server"
                    value={url}
                    onChange={e => dispatch(playerServerModule.actions.setUrl(e.target.value))}
                  />
                </div>
                <div className="control">
                  <button className="button is-link">setup</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Top;
