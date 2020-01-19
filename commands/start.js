
var varsGlobal = require("../globalVariables");
var raffle = require("../host/raffleFuncs");

let listArray = varsGlobal.list;

var counter=0;
exports.run = async (Bot, message, username, subscriber, mod) => {
    
        if (username == "youhosttv"){
        
            varsGlobal.startHost = setInterval(timer, 40000 /*300000*/);
            Bot.say("num é modi")
        } else{
            Bot.say(Bot +" "+username)
            Bot.say("num é modi")
        }

        function timer () {
            counter++;
            console.log("Timer iniciado")
            console.log("lista: "+varsGlobal.list)
            if(counter % 2 == 0 ){
                
                
                console.log("Raffle entrada: "+varsGlobal.list)
                raffle.raffle(varsGlobal.list)
                Bot.say(`host ${varsGlobal.channelWinner}`)
                varsGlobal.isJoinOpen = false;
                Bot.say(`/me Raffle Winner!! @${varsGlobal.channelWinner} is host now!`)
            }
            else {
                Bot.say(`unhost ${varsGlobal.channelWinner}`)
                Bot.say("You can join the queue now!")
                varsGlobal.list = [];
                varsGlobal.weight = [];
                varsGlobal.isJoinOpen = true;
            }
        }
    
}


