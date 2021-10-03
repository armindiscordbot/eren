require('dotenv').config();

const fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const consola = require('consola');

consola.info('Loading commands...');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
].map((command) => command.toJSON());
const commandFiles = fs.readdirSync(`${__dirname}/build/commands`).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	(async () => {
    const commandModule = await import(`${__dirname}/build/commands/${file}`)
		const command = commandModule.default.default;
		console.log(command);
		commands.push(command.data.toJSON());
  })();
}

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands })
	.then(() => consola.success('Successfully registered application commands.'))
	.catch(() => consola.error(new Error('Something went wrong deploying commands.')));
