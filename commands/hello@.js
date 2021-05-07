const Discord = require("discord.js");

module.exports.run = async(client,msg,args)=>{
    console.log("hello@")
    msg.channel.send("Hi,@everyone !!!")
}

module.exports.help={
   name: "hello@"
}