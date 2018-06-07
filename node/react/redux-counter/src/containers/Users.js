import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions";
import PropTypes from "prop-types";

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
        <div className="container">
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  dispatchGetUsers: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
