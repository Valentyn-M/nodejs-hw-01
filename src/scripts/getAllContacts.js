import { PATH_DB } from "../constants/contacts.js";
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
	try {
		const existingData = await fs.readFile(PATH_DB, 'utf-8');
		return JSON.parse(existingData);
	}
	catch (error) {
		console.log('Error reading contacts:', error);
	}
};

console.log(await getAllContacts());
