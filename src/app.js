import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';

import COMMAND from './commands/index.js';
import hasGuildCommands from './utils/hasGuildCommand.js';
import verifyDiscordRequest from './utils/verifyDiscordRequest.js';

import commandRoute from './routes/commandRoute.js';

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
// Parse request body and verifies incoming requests using discord-interactions package
app.use(express.json({ verify: verifyDiscordRequest(process.env.PUBLIC_KEY) }));

// Store for in-progress games. In production, you'd want to use a DB
// const activeGames = {};

app.use('/interactions', commandRoute);

app.get('/test', (_req, res) => {
  return res.status(200).json('ok!');
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);

  // Check if guild commands from commands.js are installed (if not, install them)
  hasGuildCommands(process.env.APP_ID, process.env.GUILD_ID, [
    COMMAND.TEST,
    COMMAND.DESVANTAGENS,
  ]);
});
