/*
    the ban hammer has spoken
    TODO : make work
    */

const Discord = require("discord.js");

module.exports.run = async(client,msg,args)=>{
    if (msg.member.hasPermission("BAN_MEMBERS")) { 
    let member = msg.mentions.members.first();
    if (member == null)
    {
        msg.channel.send(":x: Must be a member to ban!")
        return;
    }
    
    let reason = args.slice(1).join(" ");
    member.ban(reason);
    msg.channel.send(":white_check_mark: " + member.displayName + " the ban hammer has spoken!!!!  \nreason : "+ args) 
}   else { 
    msg.channel.send (":x: You do not have permission to ban a user.")
}
    
}

module.exports.help={
   name: "ban",
   descripion: "ban an user",
   usage: "ban {@usersToBan} [reason]"
}