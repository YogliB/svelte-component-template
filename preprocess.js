const svelte = require('svelte/compiler');
const autoprocessor = require('svelte-preprocess');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const main = () => {
	// source file paths
	const srcPath = path.join(__dirname, 'src/components');

	// read glob of files in directory
	glob(path.join(srcPath, '**/*'), {}, (error, files) => {
		// handling error
		if (error) {
			console.error('Unable to scan directory: ' + error);
			return;
		}
		// listing all files using forEach
		files.forEach(async (file) => {
			console.log('file', JSON.stringify(file));
			// load file
			const sourceFile = fs.readFileSync(file, 'utf-8');
			const distFile = file.replace('/src/components/', '/dist/');

			// process .svelte file
			if (file.endsWith('.svelte')) {
				// run autopreprocessor
				await parseSvelte(sourceFile, distFile);
			}
			// copy other files
			else {
				// copy static files
				fs.copyFileSync(file, distFile);
			}
		});
	});
};

const parseSvelte = async (source, destination) => {
	try {
		const item = await svelte.preprocess(
			source,
			autoprocessor({
				babel: {
					presets: [
						[
							'@babel/preset-env',
							{
								loose: true,
								// No need for babel to resolve modules
								modules: false,
								targets: {
									// ! Very important. Target es6+
									esmodules: true,
								},
							},
						],
					],
				},
				postcss: {
					plugins: [require('autoprefixer')],
				},
			}),
			{
				filename: path.basename(destination),
			}
		);

		// create directory and file
		fs.mkdirSync(path.dirname(destination), {
			recursive: true,
		});
		// write compiled code to dist file
		fs.writeFileSync(destination, item.code);
	} catch (error) {
		console.error(error);
	}
};

main();
