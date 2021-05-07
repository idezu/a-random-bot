const Discord = require("discord.js");

module.exports.run = async(client,message,args)=>{
    msg.channel.send(msg.author.avatarURL)
}

module.exports.help={
   name: "avatar",
   descripion: "display the avatar of the message author"
}