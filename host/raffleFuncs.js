/* const fs = require('fs');

let channelsJS = fs.readFileSync('../sb/channelsQueue.json');

let queue = JSON.parse(channelsJS);

var jsonQueue = require('../db/channelsQueue.js')

var random = jsonQueue.Channels[Math.floor(Math.random() * jsonQueue.Channels.length)];
*/

var varsGlobal = require("../globalVariables");

var rand = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
 
var generateWeighedList = function(list, weight) {
    var weighed_list = [];
     console.log("Generate: "+list+ " "+weight)
    // Loop over weights
    for (var i = 0; i < weight.lenght; i++) {
        var multiples = weight[i] * 100;
         console.log("multi: "+j)
        // Loop over the list of items
        for (var j = 0; j < multiples; j++) {
            console.log("for "+j+": "+list[i])
            weighed_list.push(list[i]);
        }
    }
    console.log("Weighed list:" +weighed_list)
    return weighed_list;
};

var getRandomItem = function(list, weight) {
    var total_weight = weight.reduce(function (prev, cur, i, arr) {
        return prev + cur;
    });
     
    var random_num = rand(0, total_weight);
    var weight_sum = 0;
    //console.log(random_num)
     
    for (var i = 0; i < list.length; i++) {
        weight_sum += weight[i];
        weight_sum = +weight_sum.toFixed(2);
         
        if (random_num <= weight_sum) {
            return list[i];
        }
    }
     
    // end of function
};
    
module.exports = {
    addList: function (name, multiply) {
        varsGlobal.push2list(name);
        varsGlobal.push2weight(multiply);
        console.log("Adicionado a lista: "+ varsGlobal.list+" "+varsGlobal.weight)
    }, 
    
    raffle: function  (raf) {
        console.log("raf "+raf);
        var weighed_list =  generateWeighedList(raf, varsGlobal.weight);
        var random_num = rand(0, weighed_list.length-1);
    
        //varsGlobal.channelWinner = weighed_list[random_num];
        varsGlobal.channelWinner = getRandomItem(raf, varsGlobal.weight);
        //return(weighed_list[random_num]);
        console.log(varsGlobal.channelWinner)
        //
        //console.log(weighed_list[random_num]);
    }
     
}

