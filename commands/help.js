const Discord = require("discord.js");

module.exports.run = async(client,msg,args)=>{
    msg.author.createDM(msg.author).then(channel => {
        return msg.channel.send("to lazy to write this...")
      })
    msg.channel.send("the list of command has been send in your mp, good luck!!!")
}

module.exports.help={
   name: "help",
   description:"print help message"   
}