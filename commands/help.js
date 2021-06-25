const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(client,msg,args)=>{
  
    msg.author.createDM(msg.author).then(channel => {
      const emb = new Discord.MessageEmbed().description(
        "TODO"        
      )
      return msg.channel.send(emb);
    })
    msg.channel.send("the list of command has been send in your mp, good luck!!!")
   
}

module.exports.help={
   name: "help",
   description:"print help message"   
}