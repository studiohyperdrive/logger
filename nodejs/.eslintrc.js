module.exports = {
	"extends": [
		"@studiohyperdrive/eslint-config",
		"@studiohyperdrive/eslint-config/lib/es6.js",
	],
	"parser": "babel-eslint",
	"parserOptions": {
        "sourceType": "module",
	},
	"env": {
        "node": true
    }
};
