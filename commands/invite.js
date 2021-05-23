const Discord = require("discord.js");
const fs = require("fs");
const config = require("../../config.json");


module.exports.run = async(client,msg,args)=>{
    let invite = new Discord.Invite
    msg.channel.send(invite)
}

module.exports.help={
   name: "invite"
}