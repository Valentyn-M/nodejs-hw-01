import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
	try {
		// Зчитуємо файл і перетворюємо його в JSON
		const data = await fs.readFile(PATH_DB, 'utf-8');
		return JSON.parse(data);
	} catch (error) {
		console.error('Error reading file:', error);
	}
};
