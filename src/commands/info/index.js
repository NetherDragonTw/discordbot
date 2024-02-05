import { SlashCommandBuilder, EmbedBuilder, WebSocketManager, Client } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName("info")
    .setDescription("顯示機器人資訊")

export const action = async (ctx) => {
	await ctx.channel.send({ embeds: [infoembed], ephemeral: true });
}
const ping = Client.ping
const infoembed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('機器人資訊')
	.setAuthor({ name: '我不是YEE龍' })
	.setDescription('以下是目前的資訊')
	.addFields(
		{ name: '機器人延遲', value: (`${ping}`) + "ms", inline: true },
				)
	.addFields({ name: '版本', value: 'Dev1.0', inline: true })
	.setTimestamp()
	.setFooter({ text: '開發中'});