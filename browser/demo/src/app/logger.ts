import { Logger } from "../../../../";

export const logger = new Logger();
export const productionLogger = new Logger({
	enabled: [
		"error",
	],
});
