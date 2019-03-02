import {
	debug,
	error,
	info,
	success,
	warn,
} from "./high-console";

export const config = {
	enabled: [
		"debug",
		"error",
		"info",
		"success",
		"warn",
	],
	timestamp: true,
};

export const methods = {
	debug,
	error,
	info,
	success,
	warn,
};
