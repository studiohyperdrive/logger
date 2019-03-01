import { config } from "./config";
import { createLogger, transports } from "winston";
import "winston-daily-rotate-file";
import { Signale } from "signale";
import { SignaleTransport } from "./signale";

const filesystemTransports = (path) => {
	return [
		new transports.DailyRotateFile({
			level: "silly",
			datePattern: "YYYY-MM-DD",
			dirname: `${path}/all`,
			filename: "%DATE%.log",
			maxFiles: "30d",
		}),
		new transports.DailyRotateFile({
			level: "warn",
			datePattern: "YYYY-MM-DD",
			dirname: `${path}/warn`,
			filename: "%DATE%.log",
			maxFiles: "30d",
		}),
		new transports.DailyRotateFile({
			level: "error",
			datePattern: "YYYY-MM-DD",
			dirname: `${path}/error`,
			filename: "%DATE%.log",
			maxFiles: "30d",
		}),
	];
};

export default class Logger {
	/**
	 * @constructor
	 * @param {object} options
	 */
	constructor(options = config) {
		this.options = options;

		// Initialize Signale
		const signale = new Signale({
			types: {
				cron: {
					badge: "↻",
					color: "cyan",
					label: "cron",
				},
				db: {
					badge: "◼",
					color: "magenta",
					label: "db",
				},
				debug: {
					badge: "●",
					color: "white",
					label: "debug",
				},
			},
		});
		signale.config(this.options.signale);

		// Initialize Winston
		this._winston = createLogger({
			level: "silly",
			levels: {
				error: 0,
				warn: 1,
				success: 2,
				cron: 3,
				db: 3,
				info: 3,
				debug: 4,
				silly: 5,
			},
			transports: [
				new SignaleTransport(signale),
				...(this.options.filesystem.enabled ? filesystemTransports(this.options.filesystem.path) : []),
			],
		});
	}

	/**
	 * Get winston instance
	 *
	 * @type {object}
	 */
	get winston() {
		return this._winston;
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
	log(level, msg, obj, force = false) {
		if (this.options.enabled.includes(level) || force) {
			if (!obj && typeof msg === "object") {
				obj = msg;
				msg = "";
			}
			if (level === "error" && typeof obj === "string") {
				obj = new Error(obj);
			}

			this.winston.log(level, msg, { object: obj, timestamp: new Date().toISOString() });
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
	 * Log a cron message
	 *
	 * @param {string} msg
	 * @param {object} obj
	 * @param {boolean} force
	 */
	cron(msg, obj, force) {
		this.log("cron", msg, obj, force);
	}

	/**
	 * Log a db message
	 *
	 * @param {string} msg
	 * @param {object} obj
	 * @param {boolean} force
	 */
	db(msg, obj, force) {
		this.log("db", msg, obj, force);
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
