import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName("info")
    .setDescription("顯示機器人資訊")

export const action = async (ctx) => {
	await ctx.channel.send({ embeds: [infoembed] })
}
const infoembed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('機器人資訊')
	.setAuthor({ name: '我不是YEE龍' })
	.setDescription('以下是目前的資訊')
	.addFields(
		{ name: '機器人延遲', value: 'Some value here', inline: true },
				)
	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here'});