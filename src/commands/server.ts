import { SlashCommandBuilder } from '@discordjs/builders';

const server = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with Pong!'),
	async execute(interaction: any) {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	},
};

export default server;
