import desvantagens from './desvantagens.js';
import test from './test.js';
import detalhesDesvantagem from './detalhesDesvantagem.js';

const COMMANDS = {
  // Simple test command
  TEST: {
    name: 'test',
    description: 'Comando básico para teste',
    type: 1,
    function: test,
  },
  DESVANTAGENS: {
    name: 'desvantagens',
    description: 'Lista todas as desvantagens',
    type: 1,
    function: desvantagens,
  },
  DETALHES_DESVANTAGEM: {
    name: 'desvantagem',
    description: 'Exibe os detalhes de uma desvantagem',
    type: 1,
    function: detalhesDesvantagem,
  },
};

export default COMMANDS;
