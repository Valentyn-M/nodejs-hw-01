import { PATH_DB } from "../constants/contacts.js";
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
	try {
		const contctsEmpty = [];
		const contctsEmptyJson = JSON.stringify(contctsEmpty);
		await fs.writeFile(PATH_DB, contctsEmptyJson, 'utf-8');
	}
	catch (error) {
		console.log('Error removing contacts:', error);
	}
};

removeAllContacts();
