const hDiscord = require('discord.js');
const hConfig = require("./config.json");
import CCommandSystem from './commandsystem.js';

const gClient = new hDiscord.Client();
const gCmdSys = new CCommandSystem;

client.on("message", function(message)
{
	console.log("hook::OnMessage " + message);
	
	if (message.author.bot)
		return;
	
	if (!message.content.startsWith(hConfig.CMD_PREFIX))
		return;
		
	const char pszCmdLine = message.content.slice(hConfig.CMD_PREFIX.length);
	const char pszArgs = pszCmdLine.split(' ');
	const char pszCommand = args.shift().toLowerCase();
	
	gCmdSys.OnReceiveCommand(message.channel ,pszCommand, pszArgs);
});

gClient.login(hConfig.BOT_TOKEN);
