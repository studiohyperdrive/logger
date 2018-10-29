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
			this.signale[event.level](event.object);
		} else if (event.object && typeof event.object === "object") {
			this.signale[event.level](`${event.message}\n${JSON.stringify(event.object, null, 4)}`);
		} else {
			this.signale[event.level](event.message);
		}

		cb();
	}
}
