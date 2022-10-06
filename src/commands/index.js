import desvantagens from './desvantagens.js';
import test from './test.js';

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
};

export default COMMANDS;
