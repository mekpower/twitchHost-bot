var tmi = require("tmi.js")
var {channelWinner, isJoinOpen, list, weight} = require ("./globalVariables");
const TwitchBot = require('twitch-bot')
 

var channelName= "youhosttv";
var prefix = "!";

const Bot = new TwitchBot({
    username: channelName,
    oauth: 'oauth:9bxs7vopswa4hkcil9bl6jakd9btom',
    channels: [channelName]
  })

Bot.on('join', channel => {
    console.log(`Joined channel: ${channel}`)
  })
  

Bot.on('message', chatter => {
    if(chatter.message === '!test') {
      Bot.say('Command executed! PogChamp')
    }

    const args = chatter.message.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    try{
        let commandFile = require(`./commands/${cmd}.js`)
        console.log(commandFile)
        commandFile.run(Bot, chatter.message, chatter.username, chatter.subscriber, chatter.mod)

    } catch (err) {
        Bot.say("Command doesnt exist.")
        return;
    }

    

//    const stopHost = clearInterval(startHost);
    //=============
})
