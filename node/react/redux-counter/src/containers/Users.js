import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions";

const mapStateToProps = state => {
  return { users: state.users.users };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetUsers: () => dispatch(getUsers()),
  };
};

class Users extends Component {
  componentDidMount() {
    this.props.dispatchGetUsers();
  }
  render() {
    const { users } = this.props;
    return (
      <section className="section">
        <div className="container">{JSON.stringify(users)}</div>
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
