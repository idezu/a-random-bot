const Discord = require("discord.js");

module.exports.run = async(client,msg,args)=>{
    if (msg.member.hasPermission("BAN_MEMBERS")) { 
    let member = msg.mentions.members.first();
    if (member == "")
    {
        msg.channel.send("it would have a member to ban")
        return;
    }
    
    let reason = args.slice(1).join(" ");
    member.ban(reason);
    msg.channel.send(":white_check_mark: " + member.displayName + " the ban hammer has spoken!!!!  \nreason : "+ args) 
    console.log(msg.author.tag + "has banned " + member.displayName + " (" + member + ") of the server " + msg.guild.name) 
}   else { 
    msg.channel.send (":x: You do not have permission to ban a user.")
    console.log (msg.author.tag + "wanted to ban a user on the server" + msg.guild.name + ", but he did not have permission to ban a user.") }
    
}

module.exports.help={
   name: "ban",
   descripion: "ban an user"
}