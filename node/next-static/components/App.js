import "../styles/app.scss";
import Header from "../containers/Header";

const App = ({ children }) => (
  <section className="hero is-fullheight is-primary">
    <div className="hero-head">
      <Header />
    </div>
    <div className="hero-body">{children}</div>
  </section>
);

export default App;
