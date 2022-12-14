module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:react/recommended',
		'standard',
		'plugin:jest/recommended'
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'react',
		'jest'
	],
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }]
	},
	overrides: [
		{
			files: ['*.yaml', '*.yml'],
			plugins: ['yaml'],
			extends: ['plugin:yaml/recommended']
		}
	]
}
