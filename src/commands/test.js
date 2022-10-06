import { readFile } from '../utils/readWriteFile.js';

const test = async () => {
  const testFile = await readFile('src/data/testMessage.json');

  return { message: testFile };
};

export default test;