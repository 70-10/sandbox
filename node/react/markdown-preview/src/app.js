import React from "react";
import remark from "remark";
import remark2react from "remark-react";
import "./app.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = { text: "# hello world" };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ text: e.target.value });
  }
  render() {
    return (
      <section className="section">
        <div className="columns">
          <div className="column">
            <textarea
              className="textarea"
              rows="30"
              value={this.state.text}
              onChange={this.onChange}
            />
          </div>
          <div className="column">
            <div className="content">
              {
                remark()
                  .use(remark2react)
                  .processSync(this.state.text).contents
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default App;
