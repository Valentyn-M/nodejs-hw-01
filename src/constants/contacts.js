import path from 'node:path';

// Шлях до кореневої директорії через виклик метода process.cwd()
const pathToWorkDir = path.join(process.cwd());

// Шлях до src/db/db.json
export const PATH_DB = path.join(pathToWorkDir, 'src', 'db', 'db.json');
