// Auteur ChocoScaff, Cameronlite, yourlemon, nixx57
// Remerciement à Stepiyou et Scrotumdepoulpe

console.log("bot::Scope entry");

const hDiscord = require('discord.js');
const hConfig = require("./config.json");
const hCmdSys = require("./commandsystem.js");
require("./chat_command.js");

console.log("bot::Scope include");

const gClient = new hDiscord.Client();
var gCmdSys = hCmdSys.gCommandSystem;

console.log("bot::Scope declare");

gClient.on("message",
	function(message)
	{
		if (message.author.bot)
			return;
		
		if (!message.content.startsWith(hConfig.CMD_PREFIX))
			return;
			
		var pszCmdLine = message.content.slice(hConfig.CMD_PREFIX.length);
		var pszArgs = pszCmdLine.split(' ');
		var pszCommand = pszArgs.shift().toLowerCase();
		
		gCmdSys.OnReceiveCommand(message.guild.id, message.channel, pszCommand, pszArgs);
	}
);

console.log("bot::Scope hook");

gClient.login('Token_discord'); // Entré votre Token

console.log("bot::Scope startup");

gCmdSys.PrintCommand();
