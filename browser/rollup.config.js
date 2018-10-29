const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");
const conditional = require("rollup-plugin-conditional");
const json = require("rollup-plugin-json");
const resolve = require("rollup-plugin-node-resolve");
const size = require("rollup-plugin-bundle-size");
const uglify = require("rollup-plugin-uglify");

module.exports = {
	input: "src/index.js",
	output: [
		{
			format: "es",
			file: "../dist/shd-logger.esm.js",
		},
		{
			name: "SHDLogger",
			format: "umd",
			file: "../dist/shd-logger.umd.js",
		},
	],
	plugins: [
		json(),
		resolve({
			jsnext: true,
			browser: true,
			preferBuiltins: true,
			extensions: [
				".js",
				".json",
			],
		}),
		commonjs({
			include: [
				"node_modules/**",
				"src/**",
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
