var {Bot} = require("../bot.js");
var {channelWinner} = require("../globalVariables.js");
var counter=0;
const startHost = () =>{ 
    setInterval(
        function(){
            counter++;
    
            if(counter % 2 == 0 ){
                Bot.say(`host ${channelWinner}`)
                isJoinOpen = false;
                Bot.say(`Raffle Winner!! @${channelWinner} is host now!`)
            }
            else {
                Bot.say(`unhost ${channelWinner}`)
                list = [];
                isJoinOpen = true;
            }
    
        }
    ,300000
    );
}

const stopHost = clearInterval(startHost);
    //=============

