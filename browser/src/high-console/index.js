import { config } from "./config";
import dateFormat from "dateformat";

export function debug() {
	const {
		message,
		data,
		timestamp,
	} = getMessageAndData(arguments);

	print("debug", message, data, timestamp);
}

export function error() {
	const {
		message,
		data,
		timestamp,
	} = getMessageAndData(arguments);

	print("error", message, data, timestamp);
}

export function info() {
	const {
		message,
		data,
		timestamp,
	} = getMessageAndData(arguments);

	print("info", message, data, timestamp);
}

export function success() {
	const {
		message,
		data,
		timestamp,
	} = getMessageAndData(arguments);

	print("success", message, data, timestamp);
}

export function warn() {
	const {
		message,
		data,
		timestamp,
	} = getMessageAndData(arguments);

	print("warn", message, data, timestamp);
}

function getMessageAndData() {
	let message = "";
	let data;
	let timestamp = true;

	[].slice.call(arguments[0], 0).forEach((element) => {
		if (typeof element === "string") {
			message = element;
		}
		if (typeof element === "object") {
			data = element;
		}
		if (typeof element === "boolean") {
			timestamp = element;
		}
	});

	return {
		message,
		data,
		timestamp,
	};
}

function print(type, message, data, timestamp) {
	if (data) {
		console[config.methods[type]]( // eslint-disable-line no-console
			`%c%s%c%s %c%s\n%o\n`,
			generateStyle(config.themes.timestamp), generateTimestamp(timestamp),
			generateStyle(config.themes[type]), `● ${type.toUpperCase()}:`,
			generateStyle(config.themes.black), message,
			data
		);
	} else {
		console[config.methods[type]]( // eslint-disable-line no-console
			`%c%s%c%s %c%s\n`,
			generateStyle(config.themes.timestamp), generateTimestamp(timestamp),
			generateStyle(config.themes[type]), `● ${type.toUpperCase()}:`,
			generateStyle(config.themes.black), message
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
