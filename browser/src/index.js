import { config, methods } from "./config";

export class Logger {
	/**
	 * @constructor
	 * @param {object} options
	 */
	constructor(options = config) {
		this.options = options;
	}

	/**
	 * Get options
	 *
	 * @type {object}
	 */
	get options() {
		return this._options;
	}

	/**
	 * Set options
	 *
	 * @param {object} options
	 */
	set options(options = {}) {
		this._options = {
			...config,
			...options,
		};
	}

	/**
	 * Log a message
	 *
	 * @param {string} level
	 * @param {string} msg
	 * @param {object} obj
	 */
	log(level, msg, obj) {
		if (this.options.enabled.includes(level)) {
			if (!obj && typeof msg === "object") {
				obj = msg;
				msg = "";
			}

			methods[level](msg, obj);
		}
	}

	/**
	 * Log a debug message
	 *
	 * @param {string} msg
	 * @param {object} obj
	 */
	debug(msg, obj) {
		this.log("debug", msg, obj);
	}

	/**
	 * Log an info message
	 *
	 * @param {string} msg
	 * @param {object} obj
	 */
	info(msg, obj) {
		this.log("info", msg, obj);
	}

	/**
	 * Log a success message
	 *
	 * @param {string} msg
	 * @param {object} obj
	 */
	success(msg, obj) {
		this.log("success", msg, obj);
	}

	/**
	 * Log a warn message
	 *
	 * @param {string} msg
	 * @param {object} obj
	 */
	warn(msg, obj) {
		this.log("warn", msg, obj);
	}


	/**
	 * Log an error message
	 *
	 * @param {string} msg
	 * @param {object} obj
	 */
	error(msg, obj) {
		this.log("error", msg, obj);
	}
}
