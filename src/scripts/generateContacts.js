import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
	try {
		// Зчитуємо вже існуючі дані з файлу
		const existingData = await fs.readFile(PATH_DB, 'utf-8');
		const contacts = JSON.parse(existingData);

		// Створюємо нові контакти та додаємо до існуючих
		for (let index = 0; index < number; index++) {
			const newContact = createFakeContact();
			contacts.push(newContact);
		}

		// Записуємо контакти у файл
		const contactsJson = JSON.stringify(contacts, null, 2);
		await fs.writeFile(PATH_DB, contactsJson, 'utf-8');
	}
	catch (error) {
		console.error('Error generating contacts:', error);
	}
};

generateContacts(5);
