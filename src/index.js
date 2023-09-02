const { Client, GatewayIntentBits } = require("discord.js")
const Handler = require("@thatbadname/discord-command-handler")
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ]
})

Handler.main.DiscordCommandHandler(client,  {
  mainDir: __dirname,
  configFile: '../config.json',
  eventsDir: '/events',
  commandsDir: '/commands',
  components: {
    main: '/components',
    buttons: '/buttons',
    modals: '/modals',
    selectMenus: '/selectMenus'
  },
  builtIn: {
    helpCommand: false,
    automaticRepair: false
  },
  ownerIds: ["804265795835265034"],
  // Put any ids of users that you want to be able to run ownerOnly: true commands

  ownerOnlyMessage: 'fuck off isaac',
})

client.random = null