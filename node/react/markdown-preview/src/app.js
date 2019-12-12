import React, { useState } from "react";
import remark from "remark";
import remark2react from "remark-react";
import "./app.scss";

import Markdown from "react-markdown";

export default () => {
  const [text, setText] = useState("# hello");

  return (
    <section className="section">
      <div className="columns">
        <div className="column">
          <textarea
            className="textarea"
            rows="30"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="column">
          <div className="content">
            {
              remark()
                .use(remark2react)
                .processSync(text).contents
            }
          </div>
        </div>
        <div className="column">
          <div className="content">
            <Markdown source={text} />
          </div>
        </div>
      </div>
    </section>
  );
};
