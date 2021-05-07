const Discord = require('discord.js');
const config = require("./config.json");
const fs = require("fs");
const client = new Discord.Client();
var prefix = config.prefix;
const token = config.token

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

client.on("ready", () => {
  console.log("connected at "+client.user.tag); 
  console.log("a random client is curently online."); const status = [
    {
      activity: ".help | @a random client",
      type: "WATCHING",
    },
    {
      activity: "Based on Roboliam",
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
    },
  ];
  let random = status[Math.floor(Math.random() * Math.floor(status.length))];
  client.user.setActivity(random.activity, {
    type: random.type,
  });
})

client.on('message', (msg) => { 
  
  
  if(msg.author.client) 
  {
    return;
  }
  
  if(msg.channel.type === "dm") 
  {
    return;
  }

  var messagegArray = msg.content.split(" ");
  var command = msgArray[0];
  var args = msgArray.slice(1)
  var commands = client.commands.get(command.slice(prefix.length))

  if(msg.content == `<@${client.user.id}>` ||
     msg.content == `<@!${client.user.id}>`
                                                  )
  {
    help.run
  }
  
  if(commands)
  { 
    commands.run(client, msg, args);
  }
})

client.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('welcome to this server ' + member.displayName + "go read the rules please!!!!")
  }).catch(console.error)
  
})

client.login(token);