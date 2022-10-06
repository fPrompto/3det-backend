import fs from 'fs';

const readFile = async (filePath) => {
  const rFile = await fs.promises.readFile(filePath, 'utf8');
  const content = JSON.parse(rFile);

  return content;
};

const writeFile = async (filePath, content) => {
  const wFile = await fs.promises
    .writeFile(filePath, JSON.stringify(content), 'utf8');

  return wFile;
};

export { readFile, writeFile };
