const hDiscord = require('discord.js');
const hConfig = require("./config.json");
const hCmdSys = require('./commandsystem.js');

const gClient = new hDiscord.Client();
const gCmdSys = new hCmdSys.CCommandSystem();

client.on("message", function(message)
{
	console.log("hook::OnMessage " + message);
	
	if (message.author.bot)
		return;
	
	if (!message.content.startsWith(hConfig.CMD_PREFIX))
		return;
		
	var pszCmdLine = message.content.slice(hConfig.CMD_PREFIX.length);
	var pszArgs = pszCmdLine.split(' ');
	var pszCommand = args.shift().toLowerCase();
	
	hCmdSys.CmdSys().OnReceiveCommand(message.channel ,pszCommand, pszArgs);
});

gClient.login('Token_discord');
