import * as fs from 'fs/promises';

export const readHome = fs.readFile('src/assets/index.html', { encoding: 'utf-8', flag: 'r' })