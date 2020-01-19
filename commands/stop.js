var start = require("../globalVariables.js");

exports.run = async (Bot, message, username, subscriber, mod) => {
    if (username == "youhosttv") {
        clearInterval(start.startHost);
        Bot.say("The host closed");
    }
}