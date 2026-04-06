import fs from 'fs';
import path from 'path';

const folderToDelete = path.join(process.cwd(), 'src/app/villagers/[villager]');

if (fs.existsSync(folderToDelete)) {
  fs.rmSync(folderToDelete, { recursive: true, force: true });
  console.log('Carpeta antigua eliminada.');
} else {
  console.log('No existe la carpeta.');
}
