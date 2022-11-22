/*
        this command will send the avatar of the invocer of the command
*/

const Discord = require("discord.js");

module.exports.run = async(client,msg,args)=>{
        if (!msg.mentions.members.first()) 
                msg.channel.send(new Discord.MessageEmbed().setImage(member.displayAvatarURL()).setTitle(member.username));
        else 
                msg.channel.send(new Discord.MessageEmbed().setImage(msg.author.displayAvatarURL()).setTitle(msg.author.username)); 
}

module.exports.help={
   name: "avatar",
   descripion: "display the avatar of the message author",
   usage: "avatar [@memberToViewTheAvatar]"
}