const Discord = require("discord.js");

module.exports.run = async(client,msg,args)=>{
        const emb=new Discord.MessageEmbed().setImage(msg.author.displayAvatarURL()).setTitle(msg.author.username)
        msg.channel.send(emb)
 
}

module.exports.help={
   name: "avatar",
   descripion: "display the avatar of the message author"
}