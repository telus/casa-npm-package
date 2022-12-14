module.exports = {
	collectCoverage: true,
	coverageDirectory: './coverage',
	testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)'],
	testEnvironment: 'jsdom',
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
	coveragePathIgnorePatterns: ['/stories/', '/src/coverage'],
	coverageThreshold: {
		// NOTE: this will be set to 90% in the near future
		global: {
			branches: 0,
			functions: 0,
			lines: 0,
			statements: 0
		}
	}
}
