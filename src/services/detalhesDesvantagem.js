import { readFile } from '../utils/readWriteFile.js';
import normalizeString from '../utils/normalizeString.js';
import { filesPath as filePath } from '../config/strings.js';

const detalhesDesvantagem = async (args) => {
  const desvantagensFile = await readFile(filePath.DESVANTAGENS);

  const filterArgs = args.join(' ');

  const vFind = desvantagensFile.desvantagens.find((v) => {
    const vName = normalizeString(v.name);
    const vArgs = normalizeString(filterArgs);

    return vName.includes(vArgs);
  });

  if (!vFind) {
    return { message: Message.DESVANTAGEM_ERROR };
  }
  const messageToReply = `• ${vFind.name}(${vFind.cost})\n\n${vFind.description})`;

  return { message: messageToReply };
};

export default detalhesDesvantagem;