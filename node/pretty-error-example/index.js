const debug = require("debug")("pretty-error-example");
const PrettyError = require("pretty-error");
const pe = new PrettyError();

const renderedError = pe.render(new Error("Some error message"));
debug(renderedError);
console.log(renderedError);
