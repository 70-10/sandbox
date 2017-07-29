const log4js = require("log4js");
const fluent = require("fluent-logger");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

log4js.addAppender(
  fluent.support.log4jsAppender("log4js", {
    host: "localhost",
    port: 24224,
    timeout: 3.0
  })
);

const log = getLogger("DEBUG");
logging().catch(console.error)

async function logging() {
  while (true) {
    log.trace("trace");
    log.debug("debug");
    log.info("info");
    log.warn("warn");
    log.error("error");
    log.fatal("fatal");
    await sleep(1000);
  }
}

function getLogger(level) {
  log4js.addAppender(
    fluent.support.log4jsAppender("log4js", {
      host: "localhost",
      port: 24224,
      timeout: 3.0
    })
  );

  const logger = log4js.getLogger();
  logger.setLevel(level);
  return logger;
}
