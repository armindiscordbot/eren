import fs from 'fs';
import consola from 'consola';
import Client from './baseClient';
import environment from './environment';

const { token } = environment;

const client = new Client();

const commandFiles = fs.readdirSync(`${__dirname}/commands`).filter((file: any) => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	if (client && client.user) {
		consola.success(`Logged in as ${client.user.username}#${client.user.discriminator}`);
	}
});

client.on('interactionCreate', async (interaction: any) => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.log(error);
		await interaction.reply({
			content: 'There was an error while executing this command!',
			ephemeral: true,
		});
	}
});

client.login(token);