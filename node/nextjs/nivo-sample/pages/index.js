import "../styles/app.scss";
import Calendar from "../components/Calendar";
import Pie from "../components/PieChart";

export default () => (
  <section className="section">
    <div className="container">
      <h1 className="title">nivo sample</h1>
      <div className="columns">
        <div className="column is-7">
          <div style={{ width: "100%", height: "400px" }}>
            <Calendar
              dataset={[
                {
                  day: "2017-08-10",
                  value: 112
                },
                {
                  day: "2018-08-11",
                  value: 800
                }
              ]}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-7">
          <div style={{ width: "100%", height: "400px" }}>
            <Pie
              data={[
                {
                  id: "javascript",
                  label: "javascript",
                  value: 265,
                  color: "hsl(168, 70%, 50%)"
                },
                {
                  id: "ruby",
                  label: "ruby",
                  value: 341,
                  color: "hsl(113, 70%, 50%)"
                },
                {
                  id: "php",
                  label: "php",
                  value: 432,
                  color: "hsl(70, 70%, 50%)"
                },
                {
                  id: "java",
                  label: "java",
                  value: 445,
                  color: "hsl(205, 70%, 50%)"
                },
                {
                  id: "elixir",
                  label: "elixir",
                  value: 420,
                  color: "hsl(111, 70%, 50%)"
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
