const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '$ping') {
    	message.reply('Kebanyakan Nonton Tenis Meja Anda');
  	}
    
    client.on('message', message => {
    if (message.content === '$makan') {
    	message.reply('Yang Jelas Makan Nasi Lah');
  	}
        
      client.on('message', message => {
    if (message.content === '$help') {
    	message.reply('Prefix:$');
  	}
          
        client.on('message', message => {
    if (message.content === '$about') {
    	message.reply('Created By [N0x]RtzFurry');
  	}
            
            client.on('message', message => {
    if (message.content === '$ghoul') {
    	message.reply('temannya adli');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
