// eslint-disable-next-line no-undef
const babel = require("@rollup/plugin-babel");
// eslint-disable-next-line no-undef
const commonjs = require("@rollup/plugin-commonjs");
// eslint-disable-next-line no-undef
const json = require("@rollup/plugin-json");
// eslint-disable-next-line no-undef
const resolve = require("@rollup/plugin-node-resolve");
// eslint-disable-next-line no-undef
const terser = require("@rollup/plugin-terser");
// eslint-disable-next-line no-undef
const { visualizer } = require("rollup-plugin-visualizer");

// eslint-disable-next-line no-undef
module.exports = {
	input: "src/index.js",
	output: {
		file: "../dist/shd-logger.cjs.js",
		format: "cjs",
		exports: "default",
	},
	external: [
		"signale",
		"winston",
		"winston-daily-rotate-file",
		"winston-transport",
	],
	plugins: [
		json(),
		resolve({
			exportConditions: ["node"],
			preferBuiltins: true,
			extensions: [
				".js",
				".json",
			],
		}),
		commonjs({
			include: [
				"node_modules/**/**",
				"src/**/**",
			],
		}),
		babel({
			babelHelpers: "bundled",
			exclude: "node_modules/**",
			presets: [
				[
					"@babel/preset-env", {
						"modules": false,
						"targets": {
							"node": "14",
						},
					},
				],
			],
		}),
		// eslint-disable-next-line no-undef
		...(process.env.NODE_ENV === "production" ? [
			terser({
				compress: {
					pure_getters: true, // eslint-disable-line camelcase
					unsafe: true,
					unsafe_comps: true, // eslint-disable-line camelcase
					warnings: false,
				},
				mangle: false,
			}),
		] : []),
		visualizer({
			filename: "../dist/bundle-analysis.html",
			open: false,
		}),
	],
};
