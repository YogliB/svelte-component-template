import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn(
				'npm',
				['run', 'start', '--', '--dev'],
				{
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true,
				}
			);

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		},
	};
}

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/bundle.js',
	},
	plugins: [
		svelte({
			dev: true,
		}),
		resolve({
			browser: true,
			dedupe: ['svelte'],
		}),
		commonjs(),
		serve(),
		livereload('public'),
	],
	watch: {
		clearScreen: false,
	},
};
