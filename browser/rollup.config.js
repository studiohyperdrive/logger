// eslint-disable-next-line no-undef
const babel = require("rollup-plugin-babel");
// eslint-disable-next-line no-undef
const commonjs = require("rollup-plugin-commonjs");
// eslint-disable-next-line no-undef
const conditional = require("rollup-plugin-conditional");
// eslint-disable-next-line no-undef
const json = require("rollup-plugin-json");
// eslint-disable-next-line no-undef
const resolve = require("rollup-plugin-node-resolve");
// eslint-disable-next-line no-undef
const size = require("rollup-plugin-bundle-size");
// eslint-disable-next-line no-undef
const uglify = require("rollup-plugin-uglify");

// eslint-disable-next-line no-undef
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
		// eslint-disable-next-line no-undef
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
