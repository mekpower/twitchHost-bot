# Twitch Bot 🤖: A bot to auto host channels

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4843be63952142a3be09af2cdd3722e1)](https://app.codacy.com/manual/dtayrone1/twitchHost-bot?utm_source=github.com&utm_medium=referral&utm_content=mekpower/twitchHost-bot&utm_campaign=Badge_Grade_Dashboard)

![twitch]

![app-vaylor][app]  ![github-stars][stars] ![commit][last-commit] [![patreon][patreon]](https://www.patreon.com/bePatron?u=19783035)

A bot to auto host twitch channels by another channel, through automatic draw.

This bot is based on the twitch-bot. If you want to learn more about possible functions, access the twitch-bot NPM here: [twitch-bot].

## How install

1. Clone the git.

## How execute

Use `node bot.js` or if you prefer updating without having to close, use `nodemon bot.js`.

## How configure

First, enter the main file, `bot.js`. There are two variables that define the name of the channel which will be the bot and the prefix used for the commands.

### Variables

Variable name | Default | Description
---|---|---|
channelName | `null` | It is the name which will be the bot. It must be the same as the twitch username.
prefix | `!` | Prefix used to call commands.

### Bot Sign In

For the login of the bot to be carried out, the usual password is not used, for this, oauth is used. To have oauth from the bot account, access the following link: [twitch oauth].

```javascript
const Bot = new TwitchBot({
    username: channelName,
    oauth: 'oauth:8df8f12vbu8v7u98vu7238v2mm',
    channels: [channelName]
  })
```

The channels is where all the channels that the bot will be. Because it is a bot with the idea of auto host, the `channelName` variable was used to leave only the channel itself. If you are making a bot for another purpose, the channels should be divided by a comma (eg: [kekw, PogU, Pepega]).

## How create new commands

There are two possibilities for adding new commands:

* Create a new JavaScript file in the `commands` directory, with the file name being the name of the command. (recommended). In the new file, use the code bellow and script your code inside.

```javascript
exports.run = async (Bot, message, username, subscriber, mod) => {
//code inside
}
```

* Use `if` inside `Bot.on('message')`. (not recommended)

```javascript
if(chatter.message === '!test') {
    Bot.say('Command executed! PogChamp')
}
```
## Help me

My native language is not English, so this tutorial is probably not well translated. If you are interested, help me.

We can always improve and optimize the code! If you see any inconsistencies, errors or possible improvements, help the community!

[app]: https://img.shields.io/appveyor/ci/mekpower/twitchHost-bot/master
[stars]: https://img.shields.io/github/stars/mekpower/twitchHost-bot?style=social
[twitch oauth]: https://twitchapps.com/tmi/
[last-commit]: https://img.shields.io/github/last-commit/mekpower/twitchHost-bot
[twitch-bot]: https://www.npmjs.com/package/twitch-bot
[twitch]:https://upload.wikimedia.org/wikipedia/commons/c/c6/Twitch_logo_%28wordmark_only%29.svg
[patreon]:https://img.shields.io/badge/patreon-donate-green.svg