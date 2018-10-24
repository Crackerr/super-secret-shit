const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', msg => {
  if (msg.content === 'alexa invite') {
    msg.reply('https://discord.gg/uyC9kab');
  }
});

client.on('message', msg => {
  if (msg.content === 'Alexa invite') {
    msg.reply('https://discord.gg/uyC9kab');
  }
});

client.on("message", (message) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
   
    if (message.content.startsWith(config.prefix + "play despacito")) {
      message.channel.send("no");
    } else
    if (message.content.startsWith(config.prefix + "die")) {
      message.channel.send("yes");
    }
  });

  client.on("message", (message) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
   
    if (message.content.startsWith(config.prefix + "do you work for the CIA?")) {
      message.channel.send("no");
    } else
    if (message.content.startsWith(config.prefix + "creator")) {
      message.channel.send("Crackerr");
    }
  });
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
