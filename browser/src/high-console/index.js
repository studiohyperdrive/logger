import { config } from "./config";
import dateFormat from "dateformat";

export function debug(options) {
	print("debug", options.msg, options.obj, options.timestamp);
}

export function error(options) {
	print("error", options.msg, options.obj, options.timestamp);
}

export function info(options) {
	print("info", options.msg, options.obj, options.timestamp);
}

export function success(options) {
	print("success", options.msg, options.obj, options.timestamp);
}

export function warn(options) {
	print("warn", options.msg, options.obj, options.timestamp);
}

function print(type, msg, obj, timestamp) {
	if (obj && obj instanceof Error) {
		console[config.methods[type]]( // eslint-disable-line no-console
			`%c%s%c%s %c%s\n%o\n`,
			generateStyle(config.themes.timestamp), generateTimestamp(timestamp),
			generateStyle(config.themes[type]), `● ${type.toUpperCase()}:`,
			generateStyle(config.themes.black), `${obj.message}${msg ? ` (${msg})` : ""}`,
			obj
		);
	} else if (obj && typeof obj === "object") {
		console[config.methods[type]]( // eslint-disable-line no-console
			`%c%s%c%s %c%s\n%o\n`,
			generateStyle(config.themes.timestamp), generateTimestamp(timestamp),
			generateStyle(config.themes[type]), `● ${type.toUpperCase()}:`,
			generateStyle(config.themes.black), msg,
			obj
		);
	} else if (obj && typeof obj !== "object") {
		console[config.methods[type]]( // eslint-disable-line no-console
			`%c%s%c%s %c%s: %o\n`,
			generateStyle(config.themes.timestamp), generateTimestamp(timestamp),
			generateStyle(config.themes[type]), `● ${type.toUpperCase()}:`,
			generateStyle(config.themes.black), msg,
			obj
		);
	} else {
		console[config.methods[type]]( // eslint-disable-line no-console
			`%c%s%c%s %c%s\n`,
			generateStyle(config.themes.timestamp), generateTimestamp(timestamp),
			generateStyle(config.themes[type]), `● ${type.toUpperCase()}:`,
			generateStyle(config.themes.black), msg
		);
	}
}

function generateTimestamp(timestamp) {
	if (!timestamp) {
		return "";
	}

	return dateFormat(new Date(), "[yyyy-m-d] [HH:MM:ss] › ");
}

function generateStyle(theme) {
	return Object.keys(theme).reduce((acc, key) => {
		return `${acc}${camelCaseToDash(key)}:${theme[key]};`;
	}, "");
}

function camelCaseToDash(string) {
	return string.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
}
