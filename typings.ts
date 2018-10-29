export interface BrowserOptions {
	enabled?: string[];
}

export interface NodejsOptions {
	enabled?: string[];
	filesystem?: FilesystemOptions;
	signale?: SignaleOptions;
	slack?: SlackOptions;
}

export interface FilesystemOptions {
	enabled: boolean;
	path: string;
}

export interface SignaleOptions {
	coloredInterpolation?: boolean;
	displayScope?: boolean;
	displayBadge?: boolean;
	displayDate?: boolean;
	displayFilename?: boolean;
	displayLabel?: boolean;
	displayTimestamp?: boolean;
	underlineLabel?: boolean;
	underlineMessage?: boolean;
	underlinePrefix?: boolean;
	underlineSuffix?: boolean;
	uppercaseLabel?: boolean;
}

export interface SlackOptions {
	app: string;
	channel: string;
	enabled: boolean;
	token: string;
}

export declare class Logger {
	constructor(options?: BrowserOptions | NodejsOptions)

	options: BrowserOptions | NodejsOptions;

	debug(msg: string): void;
	debug(obj: any): void;
	debug(msg: string, obj: any): void;

	info(msg: string): void;
	info(obj: any): void;
	info(msg: string, obj: any): void;

	cron(msg: string): void;
	cron(obj: any): void;
	cron(msg: string, obj: any): void;

	db(msg: string): void;
	db(obj: any): void;
	db(msg: string, obj: any): void;

	success(msg: string): void;
	success(obj: any): void;
	success(msg: string, obj: any): void;

	warn(msg: string): void;
	warn(obj: any): void;
	warn(msg: string, obj: any): void;

	error(msg: string): void;
	error(obj: any): void;
	error(msg: string, obj: any): void;
}
