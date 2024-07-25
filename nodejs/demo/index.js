// eslint-disable-next-line no-undef
const logger = require("./logger").logger;
// eslint-disable-next-line no-undef
const productionLogger = require("./logger").productionLogger;

logger.debug("some debug message", { key: "value" });
logger.info("some info message", { key: "value" });
logger.cron("some cron message", { key: "value" });
logger.db("some db message", { key: "value" });
logger.success("some success message", { key: "value" });
logger.warn("some warn message", { key: "value" });
logger.error("some error message", { key: "value" });

productionLogger.debug("some production debug message", new Error("something broke"));
productionLogger.debug("some forced production debug message", new Error("something broke"), true);
productionLogger.error("some production error message", new Error("something broke"));
