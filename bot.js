var tmi = require("tmi.js")
var {channelWinner, isJoinOpen, list, weight} = require ("./globalVariables");
const TwitchBot = require('twitch-bot')

//you can delete this
import configJ from  ('./myconfig.json')

//change to the bor channel name
var channelName= configJ.channelNames;
var prefix = "!";

const Bot = new TwitchBot({
    username: channelName,
    //change to the your oauth
    oauth: configJ.oauth,
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
        //If you want to make anything with no have this command
        //Bot.say("Command doesnt exist.")
        return;
    }
})
