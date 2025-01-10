import { PATH_DB } from "../constants/contacts.js";
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
	try {
		const existingData = await fs.readFile(PATH_DB, 'utf-8');
		const contacts = JSON.parse(existingData);
		if (contacts.length > 0) {
			contacts.pop();
		}
		const contactsJson = JSON.stringify(contacts, null, 2);
		await fs.writeFile(PATH_DB, contactsJson, 'utf-8');
	}
	catch (error) {
		console.log('Error removing last contact:', error);
	}
};

removeLastContact();
