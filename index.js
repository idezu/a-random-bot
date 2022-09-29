// read the config 
const config = require("./config.json");
var prefix = config.prefix;
const token = config.token

//              REMARK
/*  you have to create the config.json on your on 
the config file look like

{
  "token" : "your token",
  "prefix" : "your prefix"
}

*/
const fs = require("fs");
const { error } = require('console');

// discordjs initialization and declare the client
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection()

//            the command handler

// read the dir ./command for the command
fs.readdir("./commands/", (err, files) =>{
  if(err) console.log(err);
  
  var jsFiles = files.filter(f => f.split(".").pop() === "js");
  if(jsFiles.length <= 0){
    console.log("No command file!")
    return;
  }
  jsFiles.forEach((f,i) =>{
    var fileGet = require("./commands/" + f);
    console.log("File command " + f + " successfully recovered !")
    client.commands.set(fileGet.help.name, fileGet)
  });
});

//  login
client.login(token);

// define the activity
client.on("ready", () => {
  console.log("connected at "+client.user.tag); 
  console.log("a random client is curently online."); const status = [
    {
      activity: ".help | @a random client",
      type: "WATCHING",
    },
    {
      activity: "Based on Roboliam by Controlfreak707",
      type: "PLAYING",
    },
    {
      activity: "Minecraft love this game !!!!! :heart:",
      type: "PLAYING",
    },
    {
      activity: "Exterminate dragibus!!!!!!!",
      type: "PLAYING",
    },
    {
      activity: "Your cries of pain",
      type: "LISTENING",
    },
    {
      activity: "Furry YouTubers...",
      type: "WATCHING",
    }
  ];
  let random = status[Math.floor(Math.random() * Math.floor(status.length))];
  // for a randoms status
  client.user.setActivity(random.activity, {
    type: random.type,
  });
})

// where the magic begin
// when a message is send on the server
client.on('message', (msg) => { 
  
  if(msg.channel.type === "dm") 
  {
    return;
  }
  console.log("the message is in a server")

  var msgArray = msg.content.split(" ");
  var command = msgArray[0];
  var args = msgArray.slice(1)
  var commands = client.commands.get(command.slice(prefix.length))


  if(msg.content == `<@${client.user.id}>` ||
     msg.content == `<@!${client.user.id}>`|| msg.content == "?" )
  {
    var commands = client.commands.get("help")
  } 
  commands.run(client, msg, args);
  console.log("the message has been treated")
  if (error)
  {
      console.log(console.error)
  }
  
})

// when a member join a server
client.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('welcome to this server ' + member.displayName + "go read the rules please!!!!")
  }).catch(console.error)
  
})
