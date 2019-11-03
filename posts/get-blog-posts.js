/* eslint-disable no-eval */
const fs = require('fs');
const path = require('path');

const META = /export\s+const\s+meta\s+=\s+(\{(\r\n|\n|.)*?(\r\n|\n)\})/;
const DIR = path.join(process.cwd(), '/pages/posts/');

const files = fs.readdirSync(DIR).filter(file => file.endsWith('.md') || file.endsWith('.mdx'));
console.log(`found files `, files);

module.exports = files
	.map((file, index) => {
		const name = path.join(DIR, file);
		const contents = fs.readFileSync(name, 'utf8');
		const match = META.exec(contents);
		if (!match || typeof match[1] !== 'string') {
			throw new Error(`${name} needs to export const meta = {}`);
		}

		const meta = eval('(' + match[1] + ')');

		console.log(
			`path is `,
			DIR.replace(process.cwd() + '/pages', '') + file.replace(/\.mdx?$/, '')
		);

		return {
			...meta,
			path: DIR.replace(process.cwd() + '/pages', '') + file.replace(/\.mdx?$/, ''),
			index,
		};
	})
	.filter(meta => meta.published)
	.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
