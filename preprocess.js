const svelte = require('svelte/compiler');
const sveltePreprocess = require('svelte-preprocess');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { sveltePreprocessConfig } = require('./svelte-preprocess.config');

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
			// load file
			const sourceFile = fs.readFileSync(file, 'utf-8');
			const distFile = file.replace('/src/components/', '/dist/');

			// create directory and file
			fs.mkdirSync(path.dirname(distFile), {
				recursive: true,
			});

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
			sveltePreprocess(sveltePreprocessConfig),
			{
				filename: path.basename(destination),
			}
		);

		// write compiled code to dist file
		fs.writeFileSync(destination, item.code);
	} catch (error) {
		console.error(error);
	}
};

main();
