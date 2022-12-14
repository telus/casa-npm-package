import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs'

export default [
	{
		input: './src/index.js',
		output: [
			{
				file: 'dist/index.js',
				format: 'cjs'
			},
			{
				file: 'dist/index.es.js',
				format: 'es',
				exports: 'named'
			}
		],
		extensions: ['.js', '.jsx'],
		plugins: [
			getBabelOutputPlugin({
				presets: ['@babel/preset-env']
			}),
			postcss({
				plugins: []
			}),
			babel({
				babelHelpers: 'bundled',
				exclude: 'node_modules/**'
			}),
			commonjs(),
			external(),
			resolve({
				// not all files you want to resolve are .js files
				extensions: ['.js', '.jsx', '.json'],

				// Force resolving for these modules to root's node_modules that helps
				// to prevent bundling the same package multiple times if package is
				// imported from dependencies.
				dedupe: ['react', 'react-dom']
			}),
			terser({
				format: {
					beautify: true
				}
			})
		]
	}
]
