module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: ["plugin:react/recommended", "standard", "prettier", "plugin:jest/recommended"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: "module"
	},
	plugins: ["react"],
	rules: {
		"react/react-in-jsx-scope": "off"
	},
	parser: "babel-eslint",
	settings: {
		react: {
			version: "detect"
		}
	}
}
