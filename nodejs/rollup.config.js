const babel = require("rollup-plugin-babel");
const builtins = require("rollup-plugin-node-builtins");
const commonjs = require("rollup-plugin-commonjs");
const conditional = require("rollup-plugin-conditional");
const globals = require("rollup-plugin-node-globals");
const json = require("rollup-plugin-json");
const resolve = require("rollup-plugin-node-resolve");
const size = require("rollup-plugin-bundle-size");
const uglify = require("rollup-plugin-uglify");

module.exports = {
	input: "src/index.js",
	output: {
		file: "../dist/shd-logger.cjs.js",
		format: "cjs",
	},
	external: [
		"signale",
		"winston",
		"winston-daily-rotate-file",
		"winston-transport",
	],
	plugins: [
		json(),
		globals(),
		builtins(),
		resolve({
			jsnext: true,
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
			babelrc: false,
			presets: [
				[
					"env", {
						"modules": false,
					},
				],
			],
			plugins: [
				"external-helpers",
				"transform-object-rest-spread",
			],
		}),
		conditional(process.env.NODE_ENV === "production", [
			uglify({
				compress: {
					pure_getters: true, // eslint-disable-line camelcase
					unsafe: true,
					unsafe_comps: true, // eslint-disable-line camelcase
					warnings: false,
				},
				mangle: false,
			}),
		]),
		size(),
	],
};
