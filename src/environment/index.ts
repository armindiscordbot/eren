import { config as loadEnvironmentVariables } from 'dotenv';

loadEnvironmentVariables();

const environment = {
	token: process.env.DISCORD_TOKEN,
	clientId: process.env.CLIENT_ID,
	guildId: process.env.GUILD_ID,
};

export default environment;
