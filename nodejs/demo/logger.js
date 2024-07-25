// eslint-disable-next-line no-undef
const Logger = require("../../");

// eslint-disable-next-line no-undef
module.exports = {
	logger: new Logger(),
	productionLogger: new Logger({
		enabled: [
			"error",
		],
	}),
};
