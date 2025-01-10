import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
	// Спочатку перетворюємо отримані дані у рядок JSON за допомогою JSON.stringify (null, 2 додають відступи для читабельності файлу)
	const data = JSON.stringify(updatedContacts, null, 2);
	try {
		await fs.writeFile(PATH_DB, data, 'utf-8');
		console.log('ok');
	} catch (error) {
		console.error('Error writing data to file:', error);
	}
};

