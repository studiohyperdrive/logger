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
			exportConditions: ["browser"],
			browser: true,
			preferBuiltins: false,
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
			requireReturnsDefault: "auto",
		}),
		babel({
			babelHelpers: "bundled",
			exclude: "node_modules/**",
			presets: [
				[
					"@babel/preset-env", {
						"modules": false,
						"targets": {
							"browsers": ["last 2 versions", "ie >= 11"],
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
