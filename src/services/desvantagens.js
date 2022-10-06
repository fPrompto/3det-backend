import { readFile } from '../utils/readWriteFile.js';
import { filesPath as filePath } from '../config/strings.js';

const desvantagens = async () => {
  const desvantagensFile = await readFile(filePath.DESVANTAGENS);

  const desvantagensMap = desvantagensFile.desvantagens
    .map((data) => {
      const { name, cost } = data;

      return `• ${name}(${cost})`;
    });

  const a = 'Digite !desvantagem + (nome da desvantagem) para'
    + ' visualizar os detalhes';
  const b = 'Exemplo !desvantagem monstruoso';

  return { message: `${a}\n${b}\n\n${desvantagensMap.join('\n')}` };
};

export default desvantagens;
