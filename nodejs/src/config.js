export const config = {
	enabled: [
		"cron",
		"db",
		"debug",
		"error",
		"info",
		"success",
		"warn",
	],
	filesystem: {
		enabled: true,
		path: "logs",
	},
	signale: {
		coloredInterpolation: false,
		displayScope: true,
		displayBadge: true,
		displayDate: true,
		displayFilename: false,
		displayLabel: true,
		displayTimestamp: true,
		underlineLabel: true,
		underlineMessage: false,
		underlinePrefix: false,
		underlineSuffix: false,
		uppercaseLabel: true,
	},
};
