const Logger = require("../../");

module.exports = {
	logger: new Logger(),
	productionLogger: new Logger({
		enabled: [
			"error",
		],
	}),
};
