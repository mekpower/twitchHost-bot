
var varsGlobal = require("../globalVariables");
var raffle = require("../host/raffleFuncs");


//time hosting in milliseconds
var minutesHost = 20000;
//time raffle in milliseconds
var minutesRaffle = 20000;
var timeout_handles = [];

exports.run = async (Bot, message, username, subscriber, mod) => {
    
        if (username == "youhosttv"){
            Bot.say("The host system is started")
            timeOut(0, startRaffle, minutesRaffle)
        } else{
            return;
        }

        function timeOut( id, code, time ){
            if( id in timeout_handles )
            {
                clearTimeout( timeout_handles[id] )
            }
            timeout_handles[id] = setTimeout( code, time )
        }

        function startHost () {
            raffle.raffle(varsGlobal.list)
            Bot.say(`/host ${varsGlobal.channelWinner}`)
            varsGlobal.isJoinOpen = false;
            Bot.say(`/me Raffle Winner!! @${varsGlobal.channelWinner} is host now!`)
            timeOut(0, startRaffle, minutesRaffle)
        }

        function startRaffle () {
            Bot.say(`/unhost ${varsGlobal.channelWinner}`)
            Bot.say("You can join the queue now!")
            varsGlobal.list = [];
            varsGlobal.weight = [];
            varsGlobal.isJoinOpen = true;
            timeOut(1, startHost, minutesHost)
        }

        
    
}


