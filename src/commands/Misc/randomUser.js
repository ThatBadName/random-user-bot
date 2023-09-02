const {
  SlashCommandBuilder,
} = require('discord.js') // Require SlashCommandBuilder from discord.js

module.exports = {
  testOnly: true, // If true this command will only be available in your test server
  ownerOnly: false, // If true this command will only be runnable if the users id is part of ownerIds
  hide: false, // If true this command will be hidden from the built in help command
  slash: true, // Make it a slash command. You can use "both" to make it both slash and prefix
  data: new SlashCommandBuilder() // The data of the slash command
    .setName('random') // The name of the command
    .setDescription('Random user')
    .setDMPermission(false)
    .addStringOption(option =>
      option.setName('arr')
        .setDescription(`.`)
        .setRequired(true)
    )
    .addStringOption(option =>
      option.setName('msg')
      .setDescription('.')
      .setMaxLength(2000)
      .setRequired(true)  
    )
    .addBooleanOption(option =>
      option.setName('hide')
      .setDescription('.')
      .setRequired(true)  
    ), // The commands description

  async execute(interaction, client) {
    let users = interaction.options.getString('arr').split(',')
    let user = users[Math.floor(Math.random() * users.length)]
    let hide = false
    let trueHide = interaction.options.getBoolean('hide')
    if (client.ownerIds.includes(interaction.user.id)) hide = interaction.options.getBoolean('hide')
    user = user.trim().replaceAll(new RegExp(/[^0-9]*/gm), '')

    let member = interaction.guild.members.cache.get(user)

    member.send({content: interaction.options.getString('msg')})
    interaction.reply({content: trueHide ? `done ig` : `And I choose: <@${user}>`})
    if (hide) client.random = member
  }
}