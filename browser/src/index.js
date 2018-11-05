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
	 * @param {boolean} force
	 */
	log(level, msg, obj, force) {
		if (this.options.enabled.includes(level) || force) {
			if (!obj && typeof msg === "object") {
				obj = msg;
				msg = "";
			}
			if (level === "error" && typeof obj === "string") {
				obj = new Error(obj);
			}

			methods[level](msg, obj);
		}
	}

	/**
	 * Log a debug message
	 *
	 * @param {string} msg
	 * @param {object} obj
	 * @param {boolean} force
	 */
	debug(msg, obj, force) {
		this.log("debug", msg, obj, force);
	}

	/**
	 * Log an info message
	 *
	 * @param {string} msg
	 * @param {object} obj
	 * @param {boolean} force
	 */
	info(msg, obj, force) {
		this.log("info", msg, obj, force);
	}

	/**
	 * Log a success message
	 *
	 * @param {string} msg
	 * @param {object} obj
	 * @param {boolean} force
	 */
	success(msg, obj, force) {
		this.log("success", msg, obj, force);
	}

	/**
	 * Log a warn message
	 *
	 * @param {string} msg
	 * @param {object} obj
	 * @param {boolean} force
	 */
	warn(msg, obj, force) {
		this.log("warn", msg, obj, force);
	}


	/**
	 * Log an error message
	 *
	 * @param {string} msg
	 * @param {object} obj
	 * @param {boolean} force
	 */
	error(msg, obj, force) {
		this.log("error", msg, obj, force);
	}
}
