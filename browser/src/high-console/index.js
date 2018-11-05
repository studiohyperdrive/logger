import { config } from "./config";

export function debug() {
	const {
		message,
		data,
	} = getMessageAndData(arguments);

	print("debug", message, data);
}

export function error() {
	const {
		message,
		data,
	} = getMessageAndData(arguments);

	print("error", message, data);
}

export function info() {
	const {
		message,
		data,
	} = getMessageAndData(arguments);

	print("info", message, data);
}

export function success() {
	const {
		message,
		data,
	} = getMessageAndData(arguments);

	print("success", message, data);
}

export function warn() {
	const {
		message,
		data,
	} = getMessageAndData(arguments);

	print("warn", message, data);
}

function getMessageAndData() {
	let message = "";
	let data;

	[].slice.call(arguments[0], 0).forEach((element) => {
		if (typeof element === "string") {
			message = element;
		}
		if (typeof element === "object") {
			data = element;
		}
	});

	return {
		message,
		data,
	};
}

function print(type, message, data) {
	if (data) {
		console[config.methods[type]](`%c%s %c%s\n%o\n`, generateStyle(config.themes[type]), `● ${type.toUpperCase()}:`, generateStyle(config.themes.black), message, data); // eslint-disable-line no-console
	} else {
		console[config.methods[type]](`%c%s %c%s\n`, generateStyle(config.themes[type]), `● ${type.toUpperCase()}:`, generateStyle(config.themes.black), message); // eslint-disable-line no-console
	}
}

function generateStyle(theme) {
	return Object.keys(theme).reduce((acc, key) => {
		return `${acc}${camelCaseToDash(key)}:${theme[key]};`;
	}, "");
}

function camelCaseToDash(string) {
	return string.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
}
