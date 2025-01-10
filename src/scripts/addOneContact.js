import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import fs from 'node:fs/promises';

export const addOneContact = async () => {
	try {
		const existingData = await fs.readFile(PATH_DB, 'utf-8');
		const contacts = JSON.parse(existingData);
		const newContact = createFakeContact();
		contacts.push(newContact);
		const contactsJson = JSON.stringify(contacts, null, 2);
		await fs.writeFile(PATH_DB, contactsJson, 'utf-8');
	}
	catch (error) {
		console.log('Error adding new contact:', error);
	}
};

addOneContact();
