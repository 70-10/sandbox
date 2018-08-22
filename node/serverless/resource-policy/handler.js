"use strict";

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello"
    })
  };
};

module.exports.world = async (event, context) => {
  return {
    statuCode: 200,
    body: JSON.stringify({
      message: "world"
    })
  };
};
