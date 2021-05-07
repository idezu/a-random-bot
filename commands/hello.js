const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(client,msg,args)=>{
    console.log("hello")
    msg.reply("Hi!!!")
}

module.exports.help={
   name: "hello"
}