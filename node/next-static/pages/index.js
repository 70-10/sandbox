import "../styles/app.scss";
import { connect } from "react-redux";
import { Creator } from "../actions";
import Header from "../containers/Header";

const mapStateToProps = state => ({
  menu_opened: state.menu.opened
});
const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(Creator.Menu.toggle())
});

const Top = ({ menu_opened, toggleMenu }) => {
  return (
    <div>
      <section className="hero is-fullheight is-light">
        <div className="hearo-head">
          <Header />
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Top</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
