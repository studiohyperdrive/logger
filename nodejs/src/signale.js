import Transport from "winston-transport";

export class SignaleTransport extends Transport {
	constructor(signale) {
		super();

		this._signale = signale;
	}

	get signale() {
		return this._signale;
	}

	log(event, cb) {
		if (event.object && event.object instanceof Error) {
			event.object.message = `${event.object.message}${event.message ? ` (${event.message})` : ""}`;
			this.signale[event.level](event.object);
		} else if (event.object && typeof event.object === "object") {
			this.signale[event.level](`${event.message}\n${JSON.stringify(event.object, null, 4)}`);
		} else if (event.object && typeof event.object !== "object") {
			this.signale[event.level](`${event.message}: ${event.object}`);
		} else {
			this.signale[event.level](event.message);
		}

		cb();
	}
}
