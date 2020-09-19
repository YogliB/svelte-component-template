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
			// enable run-time checks
			dev: true,
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins.
		// In some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve({
			browser: true,
			dedupe: ['svelte', 'svelte/internal'],
		}),
		commonjs(),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		livereload('public'),
	],
	watch: {
		clearScreen: false,
	},
};
