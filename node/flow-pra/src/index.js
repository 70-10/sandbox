// @flow

const foo = (x: ?number): string => {
  if (x) {
    return x.toString();
  }
  return "default string";
};
