import { PATH_DB } from "../constants/contacts.js";
import fs from 'node:fs/promises';

export const countContacts = async () => {
	try {
		const existingData = await fs.readFile(PATH_DB, 'utf-8');
		const contacts = JSON.parse(existingData);
		return contacts.length;
	}
	catch (error) {
		console.log('Error counting contacts:', error);
	}
};

console.log(await countContacts());
