const Discord = require("discord.js");

module.exports.run = async(client,msg,args)=>{
    const embed = {
      color: 3447003,
      description: args
      }
      msg.channel.send({embed});
}

module.exports.help={
   name: "embed"
}