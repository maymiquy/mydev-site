import { promises as fs } from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import dataJson from './data.json' assert { type: "json" };

const data = {
	description: "this template",
	githubUsername: "usename templlate",
	avatarUrl: "",
	displayName: "display nametemplate",
	email: "template@email.com",
	socials: {},
};

(async () => {
	dotenv.config({ path: path.join(process.cwd(), '.env') });
	dotenv.config({ path: path.join(process.cwd(), '.env.local') });

	if (!process.env.GH_TOKEN) {
		throw new Error('Please set GH_TOKEN in .env or .env.local');
	}
	if (process.env.IS_TEMPLATE === 'false') {


		return;
	}
	if (dataJson.githubUsername !== 'maymiquy') {

		return;
	}

	console.log('⚠️  This is still a template. Please update data.json file and set IS_TEMPLATE to false in .env.local to use your data');
	console.log('⚙️  Reverting personal data to template data...');


	const faviconPath = path.join(process.cwd(), 'public', 'favicon.ico');
	await fs.unlink(faviconPath);
	console.log('⚙️  Removed favicon.ico');


	const dataPath = path.join(process.cwd(), 'data.json');
	const newData = { ...dataJson, ...data };

	await fs.writeFile(dataPath, JSON.stringify(newData, null, 4));

	console.log('⚙️  Reverted to template data (using octocat).');
})();