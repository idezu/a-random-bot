/*
   TODO: make work
   */

const Discord = require("discord.js");

module.exports.run = async(client,msg,args)=>{
      /*if (args == "")
      {
         msg.channel.send("you have to enter parameter")
         return;
      }
   const embed = {
      color: 3447003,
      description: args
      }
      msg.channel.send({embed});
      */
     msg.channel.send("soon")
}

module.exports.help={
   name: "embed",
   description: "display an embed with your message",
   usage: "embed {your message}"
}