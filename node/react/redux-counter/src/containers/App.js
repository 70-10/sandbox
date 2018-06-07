import React from "react";
import { connect } from "react-redux";
import { increment, decrement, incrementAsync, decrementAsync } from "../actions";

const mapStateToProps = state => {
  return { num: state.counter.count };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickIncrement: num => dispatch(increment(num)),
    onClickDecrement: num => dispatch(decrement(num)),
    onClickIncrementAsync: num => dispatch(incrementAsync(num)),
    onClickDecrementAsync: num => dispatch(decrementAsync(num)),
  };
};

const Counter = ({
  num,
  onClickIncrement,
  onClickDecrement,
  onClickIncrementAsync,
  onClickDecrementAsync,
  onClickGetUsers,
}) => (
  <section className="section">
    <div className="container">
      <h1 className="title">{num}</h1>
      <a
        className="button is-primary"
        onClick={e => {
          e.preventDefault();
          onClickIncrement();
        }}
      >
        +1
      </a>
      <a
        className="button is-danger"
        onClick={e => {
          e.preventDefault();
          onClickDecrement(1);
        }}
      >
        -1
      </a>

      <a
        className="button is-info"
        onClick={e => {
          e.preventDefault();
          onClickIncrementAsync();
        }}
      >
        Async +1
      </a>
      <a
        className="button is-warning"
        onClick={e => {
          e.preventDefault();
          onClickDecrementAsync(1);
        }}
      >
        Async -1
      </a>
    </div>
  </section>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
