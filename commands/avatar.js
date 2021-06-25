const Discord = require("discord.js");

module.exports.run = async(client,msg,args)=>{
        
        let member = msg.mentions.members.first();
        if (member == "")
        {
                let emb=new Discord.MessageEmbed().setImage(member.displayAvatarURL()).setTitle(member.username)
        }
        else
        {
                let emb=new Discord.MessageEmbed().setImage(msg.author.displayAvatarURL()).setTitle(msg.author.username)
        }
        msg.channel.send(emb)
 
}

module.exports.help={
   name: "avatar",
   descripion: "display the avatar of the message author",
   usage: "avatar [@memberToViewTheAvatar]"
}