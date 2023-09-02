const {
  SlashCommandBuilder,
} = require('discord.js') // Require SlashCommandBuilder from discord.js

module.exports = {
  testOnly: true, // If true this command will only be available in your test server
  ownerOnly: true, // If true this command will only be runnable if the users id is part of ownerIds
  hide: false, // If true this command will be hidden from the built in help command
  slash: true, // Make it a slash command. You can use "both" to make it both slash and prefix
  data: new SlashCommandBuilder() // The data of the slash command
    .setName('reveal') // The name of the command
    .setDescription('.')
    .setDMPermission(false), // The commands description

  async execute(interaction, client) {
    let member = client.random

    if (!member) return interaction.reply({content:'no.'})
    interaction.reply({content: `why the fuck are you making me do work. anyway the user is ${member}`})
  }
}