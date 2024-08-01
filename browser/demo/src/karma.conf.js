// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

// eslint-disable-next-line no-undef
module.exports = (config) => {
	config.set({
		basePath: "",
		frameworks: ["jasmine", "@angular-devkit/build-angular"],
		plugins: [
			// eslint-disable-next-line no-undef
			require("karma-jasmine"),
			// eslint-disable-next-line no-undef
			require("karma-chrome-launcher"),
			// eslint-disable-next-line no-undef
			require("karma-jasmine-html-reporter"),
			// eslint-disable-next-line no-undef
			require("karma-coverage-istanbul-reporter"),
			// eslint-disable-next-line no-undef
			require("@angular-devkit/build-angular/plugins/karma"),
		],
		client: {
			clearContext: false, // leave Jasmine Spec Runner output visible in browser
		},
		coverageIstanbulReporter: {
			// eslint-disable-next-line no-undef
			dir: require("path").join(__dirname, "../coverage"),
			reports: ["html", "lcovonly"],
			fixWebpackSourcePaths: true,
		},
		reporters: ["progress", "kjhtml"],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ["Chrome"],
		singleRun: false,
	});
};
