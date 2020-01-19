var addList = require('../host/raffleFuncs');
var varsGlobal = require("../globalVariables");

var sub = 0;
exports.run = (Bot, message, username, subscriber, mod) => {
    console.log("join start")
    if(varsGlobal.isJoinOpen == false){
        Bot.say(`@${username}, the queue has been ended, wait to the next`);
    }
    else {
        console.log("dentro do else")
        if(!isJoined(username)){
            console.log("dentro do if do else")
            if (subscriber == true) sub = 0.4;
            else sub = 0.1;
            addList.addList(username, sub)
            //raffle.addList(username, subscriber);
            Bot.say(`@${username}, you is added on Queue! Wait to finish queue count down!`);
            console.log("you: "+ varsGlobal.list+" "+varsGlobal.weight)
        }
    }
    
}

function isJoined (username) {
    var searchUser = varsGlobal.list.find(function(item) {
        console.log(item)
        return item == username;
    } )
}