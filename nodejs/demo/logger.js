const logger = require("../../");

module.exports = {
	logger: new logger(),
	productionLogger: new logger({
		enabled: [
			"error",
		],
	}),
};
