import "../styles/app.scss";
import Calendar from "../components/Calendar";

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
    </div>
  </section>
);
