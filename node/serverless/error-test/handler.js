"use strict";

module.exports.hello = (event, context, callback) => {
  callback(new Error("error test"), null);
};
