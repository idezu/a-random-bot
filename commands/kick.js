/*
    kick a member
    TODO: make work
    */

const Discord = require("discord.js");

module.exports.run = async(client,msg,args)=>{
    if (msg.member.hasPermission("KICK_MEMBERS")) {
        let member = msg.mentions.members.first(); 

        if (!member)
        {
            msg.channel.send(":x: Must be a member to kick!")
            return;
        }        
        member.kick(args.slice(1).join(" "));
        msg.channel.send(":white_check_mark: " + member.displayName + " has been kicked!")
        console.log(msg.author.tag + " has kicked " + member.displayName + " (" + member + ") from the server " + msg.guild.name) 
    }
    else 
        msg.channel.send(":x: You don't have the permition to kick this member.")
}

module.exports.help={
   name: "kick",
   descripion: "kick an user",
   usage: "kick {@usersToKick} [reason]"
}