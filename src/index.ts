import { Client } from "discord.js";

const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent']
});

const token = process.env.BOT_TOKEN;

client.login(token);

client.on('ready', (c) => {
    console.log(`${c.user.username} is online.`);
})