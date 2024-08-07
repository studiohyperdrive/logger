import globals from "globals";
import babelParser from "babel-eslint";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [{
	ignores: ["**/dist/**/*", "**/coverage/**/*", "**/node_modules/**/*", "node_modules"],
}, ...compat.extends("eslint:recommended"), {
	plugins: {},

	languageOptions: {
		globals: {
			...globals.browser,
			...globals.node,
			...Object.fromEntries(Object.entries(globals.commonjs).map(([key]) => [key, "off"])),

			...Object.fromEntries(
				Object.entries(globals["shared-node-browser"]).map(([key]) => [key, "off"]),
			),

			...Object.fromEntries(Object.entries(globals.worker).map(([key]) => [key, "off"])),
			...globals.amd,
			...globals.mocha,
			...globals.jasmine,
			...Object.fromEntries(Object.entries(globals.jest).map(([key]) => [key, "off"])),
			...Object.fromEntries(Object.entries(globals.phantomjs).map(([key]) => [key, "off"])),
			...Object.fromEntries(Object.entries(globals.protractor).map(([key]) => [key, "off"])),
			...Object.fromEntries(Object.entries(globals.qunit).map(([key]) => [key, "off"])),
			...globals.jquery,
			...Object.fromEntries(Object.entries(globals.prototypejs).map(([key]) => [key, "off"])),
			...Object.fromEntries(Object.entries(globals.shelljs).map(([key]) => [key, "off"])),
			...Object.fromEntries(Object.entries(globals.meteor).map(([key]) => [key, "off"])),
			...globals.mongo,
			...Object.fromEntries(Object.entries(globals.applescript).map(([key]) => [key, "off"])),
			...Object.fromEntries(Object.entries(globals.nashorn).map(([key]) => [key, "off"])),
			...Object.fromEntries(Object.entries(globals.serviceworker).map(([key]) => [key, "off"])),
			...Object.fromEntries(Object.entries(globals.atomtest).map(([key]) => [key, "off"])),
			...Object.fromEntries(Object.entries(globals.embertest).map(([key]) => [key, "off"])),
			...Object.fromEntries(Object.entries(globals.webextensions).map(([key]) => [key, "off"])),
			...Object.fromEntries(Object.entries(globals.greasemonkey).map(([key]) => [key, "off"])),
			_: true,
		},

		parser: babelParser,
		ecmaVersion: 6,
		sourceType: "module",

		parserOptions: {
			ecmaFeatures: {
				globalReturn: false,
				impliedStrict: true,
				jsx: false,
				experimentalObjectRestSpread: true,
			},
		},
	},

	rules: {
		"comma-dangle": ["warn", {
			arrays: "always-multiline",
			objects: "always-multiline",
			imports: "always-multiline",
			exports: "always-multiline",
			functions: "ignore",
		}],

		"no-cond-assign": [2],
		"no-console": "warn",
		"no-constant-condition": 2,
		"no-control-regex": 1,
		"no-debugger": "error",
		"no-dupe-args": 2,
		"no-dupe-keys": 2,
		"no-duplicate-case": 2,
		"no-empty-character-class": 1,
		"no-empty": 2,
		"no-ex-assign": 2,
		"no-extra-boolean-cast": 1,
		"no-extra-parens": 0,
		"no-extra-semi": "error",
		"no-func-assign": 2,
		"no-inner-declarations": 0,
		"no-invalid-regexp": 2,
		"no-irregular-whitespace": 2,
		"no-negated-in-lhs": 2,
		"no-obj-calls": 1,
		"no-regex-spaces": 1,
		"no-reserved-keys": 0,
		"no-sparse-arrays": 2,
		"no-unreachable": 2,
		"use-isnan": 2,
		"valid-jsdoc": 0,
		"valid-typeof": 1,
		"no-unexpected-multiline": 0,
		"accessor-pairs": 0,
		"block-scoped-var": 0,
		complexity: 0,
		"consistent-return": 0,
		curly: 1,
		"default-case": "error",
		"dot-notation": 1,
		"dot-location": 0,
		eqeqeq: "error",
		"guard-for-in": 0,
		"no-alert": "error",
		"no-caller": 0,
		"no-div-regex": 0,
		"no-else-return": 0,
		"no-empty-label": 0,
		"no-eq-null": 0,
		"no-eval": "error",
		"no-implied-eval": 0,
		"no-extend-native": 0,
		"no-extra-bind": 0,
		"no-fallthrough": 0,
		"no-floating-decimal": 0,
		"no-iterator": 0,
		"no-labels": 0,
		"no-lone-blocks": 0,
		"no-loop-func": 0,
		"no-multi-spaces": 0,
		"no-multi-str": 0,
		"no-native-reassign": 0,
		"no-new-func": 0,
		"no-new-wrappers": 0,
		"no-new": 0,
		"no-octal-escape": 0,
		"no-octal": 0,
		"no-param-reassign": 0,
		"no-process-env": 0,
		"no-proto": 0,
		"no-redeclare": 0,
		"no-return-assign": 0,
		"no-script-url": 0,
		"no-self-compare": 0,
		"no-sequences": 1,
		"no-throw-literal": 0,
		"no-unused-expressions": 2,
		"no-void": 0,
		"no-warning-comments": 0,
		"no-with": 0,
		"prefer-promise-reject-errors": ["error"],
		radix: 0,
		"vars-on-top": 0,
		"wrap-iife": 0,
		yoda: ["error", "never"],
		"no-catch-shadow": 0,
		"no-delete-var": 0,
		"no-label-var": 0,
		"no-shadow": "error",
		"no-shadow-restricted-names": 0,
		"no-undef": "error",
		"no-undef-init": 0,
		"no-undefined": 0,
		"no-unused-vars": "warn",
		"no-use-before-define": 0,
		"handle-callback-err": 0,
		"no-mixed-requires": 0,
		"no-new-require": 0,
		"no-path-concat": 0,
		"no-process-exit": 0,
		"no-restricted-modules": 0,
		"no-sync": 0,
		"array-bracket-spacing": 0,
		"brace-style": [2, "1tbs"],
		camelcase: 1,

		"comma-spacing": ["error", {
			before: false,
			after: true,
		}],

		"comma-style": [2, "last"],
		"computed-property-spacing": 0,
		"consistent-this": 0,
		"eol-last": "error",
		"func-names": 0,
		"func-style": 0,

		indent: ["error", "tab", {
			SwitchCase: 1,
		}],

		"key-spacing": 0,
		"lines-around-comment": 0,
		"linebreak-style": 0,
		"max-nested-callbacks": 0,
		"new-cap": 0,
		"new-parens": 0,
		"no-array-constructor": 0,
		"no-continue": 0,
		"no-inline-comments": 0,
		"no-lonely-if": 0,
		"no-mixed-spaces-and-tabs": [2, "smart-tabs"],

		"no-multiple-empty-lines": ["error", {
			max: 3,
		}],

		"no-nested-ternary": 0,
		"no-new-object": 0,
		"no-spaced-func": 0,
		"no-ternary": 0,

		"no-trailing-spaces": [2, {
			skipBlankLines: true,
		}],

		"no-underscore-dangle": 0,
		"one-var": [2, "never"],
		"object-curly-spacing": [2, "always"],
		"operator-assignment": 0,
		"operator-linebreak": 0,

		"padded-blocks": ["error", {
			blocks: "never",
			classes: "never",
			switches: "never",
		}],

		"quote-props": 0,

		quotes: ["error", "double", {
			avoidEscape: true,
			allowTemplateLiterals: true,
		}],

		"semi-spacing": 0,
		semi: ["error", "always"],
		"sort-vars": 0,
		"keyword-spacing": 2,
		"space-before-blocks": 2,
		"space-before-function-paren": [2, "never"],
		"space-in-parens": [2, "never"],
		"space-infix-ops": 1,
		"space-unary-ops": 1,
		"spaced-comment": 0,
		"wrap-regex": 0,

		"padding-line-between-statements": ["error", {
			blankLine: "always",
			prev: "*",
			next: "return",
		}, {
			blankLine: "always",
			prev: "*",
			next: "function",
		}, {
			blankLine: "always",
			prev: "*",
			next: "for",
		}],

		"max-depth": 0,
		"max-len": 0,
		"max-params": 0,
		"max-statements": 0,
		"no-bitwise": 0,
		"no-plusplus": 0,
		"generator-star-spacing": 0,
		"no-this-before-super": 0,
		"no-var": ["error"],
		"object-shorthand": 0,
		"arrow-spacing": "error",
		"prefer-const": "warn",
		"prefer-arrow-callback": "warn",
		"prefer-template": "warn",
		"constructor-super": 0,
	},
}];
