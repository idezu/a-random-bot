const Discord = require("discord.js");

module.exports.run = async(client,msg,args)=>{
    if (msg.member.hasPermission("KICK_MEMBERS")) {
        let member = msg.mentions.members.first(); 
        let reason = args.slice(1).join(" ");
        
        member.kick(reason);
        msg.channel.send(":white_check_mark: " + member.displayName + " has been kicked!")
        console.log(msg.author.tag + " has kicked " + member.displayName + " (" + member + ") from the server " + msg.guild.name) 
    }
    else {
        msg.channel.send(":x: You don't have the permition to kick this member.")
        console.log(msg.author.tag + " has to kick a member of the server " + msg.guild.name + ", but he has not the right to do this!!!!!!!!!!!!!!!") 
    }
}

module.exports.help={
   name: "kick"
}