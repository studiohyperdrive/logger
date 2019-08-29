export interface BrowserOptions {
	enabled?: string[];
	timestamp?: boolean;
}

export interface NodejsOptions {
	enabled?: string[];
	filesystem?: FilesystemOptions;
	timestamp?: boolean
}

export interface FilesystemOptions {
	enabled: boolean;
	path?: string;
}

export declare class Logger {
	constructor(options?: BrowserOptions | NodejsOptions)

	options: BrowserOptions | NodejsOptions;

	debug(msg: string): void;
	debug(obj: any): void;
	debug(msg: string, obj: any): void;
	debug(msg: string, obj: any, force: boolean): void;

	info(msg: string): void;
	info(obj: any): void;
	info(msg: string, obj: any): void;
	info(msg: string, obj: any, force: boolean): void;

	cron(msg: string): void;
	cron(obj: any): void;
	cron(msg: string, obj: any): void;
	cron(msg: string, obj: any, force: boolean): void;

	db(msg: string): void;
	db(obj: any): void;
	db(msg: string, obj: any): void;
	db(msg: string, obj: any, force: boolean): void;

	success(msg: string): void;
	success(obj: any): void;
	success(msg: string, obj: any): void;
	success(msg: string, obj: any, force: boolean): void;

	warn(msg: string): void;
	warn(obj: any): void;
	warn(msg: string, obj: any): void;
	warn(msg: string, obj: any, force: boolean): void;

	error(msg: string): void;
	error(obj: any): void;
	error(msg: string, obj: any): void;
	error(msg: string, obj: any, force: boolean): void;
}
