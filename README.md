# eren

Eren, experimental rossanodan's server bot!

## Discord server

https://discord.gg/SBM86PGQyU

## Why the name Eren?

If you know Attack on Titan, you know who Eren is. If not.. [take a look](https://en.wikipedia.org/wiki/Attack_on_Titan), you might like it!

## What Eren can do?

Eren is an experimental project so its functionalities are unknown at the moment.

## Tech stack

- NodeJS v16.9.0
- [discord.js](https://discord.js.org/#/)
- [discordjs.guide](https://discordjs.guide/)
- GitHub Actions

## How to run eren

- Clone the repository `git clone https://github.com/armindiscordbot/eren.git`
- Install the dependencies `npm i` or `npm install`
- Create a `.env` file in the root folder
- If you want to run the production build, run `npm run build` and `npm run start`
- If you want to run in development mode, run `npm run dev`

## The `.env` file

In your `.env` file, paste the following

```
DISCORD_TOKEN=your_discord_token
CLIENT_ID=your_client_id
GUILD_ID=your_guild_id
```

and replace

- `your_discord_token` with the token provided by Discord when you create the Bot
- `your_client_id` with the client ID provided by Discord when you create the Bot
- `your_guild_id` with the server ID

## How to register slash commands

Add the new command in the file `register-commands.js` as follows

```javascript
const { SlashCommandBuilder } = require('@discordjs/builders');
...
const commands = [
  // add new commands here
  new SlashCommandBuilder().setName('command_name').setDescription('command_description'),
].map((command) => command.toJSON());
```

Open the terminal, navigate to the root folder of the project and run the scripts as follows

```bash
node register-commands.js
```

[Here](https://github.com/discordjs/builders/blob/c0f7993d47d464ce54643d9a1ad09deb40255430/docs/examples/Slash%20Command%20Builders.md) you can find more information about `SlashCommandBuilder`.

## Author

Rossano D'Angelo