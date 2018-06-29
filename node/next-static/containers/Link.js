// import "../styles/app.scss";
import { connect } from "react-redux";
import { Creator } from "../actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  routerPush: path => dispatch(Creator.Router.push(path))
});

const Link = ({ to, routerPush, children, className }) => (
  <a className={className} onClick={() => routerPush(to)}>
    {children}
  </a>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
