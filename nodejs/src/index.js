import { config } from "./config";
import { createLogger, transports } from "winston";
import "winston-daily-rotate-file";
import { emitToSlack } from "./slack";
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
	 */
	log(level, msg, obj) {
		if (this.options.enabled.includes(level)) {
			if (!obj && typeof msg === "object") {
				obj = msg;
				msg = "";
			}

			this.winston.log(level, msg, { object: obj, timestamp: new Date().toISOString() });

			if (level === "error" && this.options.slack.enabled) {
				emitToSlack(this.options.slack, msg, obj);
			}
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
	 * Log a cron message
	 *
	 * @param {string} msg
	 * @param {object} obj
	 */
	cron(msg, obj) {
		this.log("cron", msg, obj);
	}

	/**
	 * Log a db message
	 *
	 * @param {string} msg
	 * @param {object} obj
	 */
	db(msg, obj) {
		this.log("db", msg, obj);
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
