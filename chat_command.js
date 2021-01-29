console.log("chat_command::Scope entry");

const hCmdSys = require("./commandsystem.js");

console.log("chat_command::Scope include");

var gCmdSys = hCmdSys.gCommandSystem;

console.log("chat_command::Scope declare");

function RandomInt(iMin, iMax)
{
	return ((Math.random() * (iMax - iMin)) + iMin);
}

/*
1. variable 
var message = "message";

2. fonction
function Func(pChannel, args)
{
	...
}

3. registre
CmdSys().RegisterCCmd("nom de la commande sans éspace", Func);
*/

var szMessageArray = 
[
	"MSG_1",
	"MSG_2"
];

function __s_ChatCmd_stepipoule(pChannel, args)
{
	pChannel.send(RandomInt(0, szMessageArray.lenght));
}

var iLastTime = -1;

var szMessageArraylegay1 = 
[
	"<@1024> est gay en fait",
	"<@1024> est devenu gay a l'instant"
];

var szMessageArraylegay2 = 
[
	"<@1024> n'avais pas été gay depuis ",
	"<@1024> est gay, la dernière fois remonte a "
];

var szMessageArraylegay3 = 
[
	" sans que <@1024> ne fasse le gay",
	" depuis la dernière fois que <@1024> a été gay"
];

function __s_ChatCmd_legay(pChannel, args)
{
	if (iLastTime <= 0)
	{
		pChannel.send(szMessageArraylegay1[RandomInt(0, szMessageArraylegay1.lenght)]);
		return;
	}
	
	var szMsg = [];
	var szFormat = [];
	
	var flTimeDiff =  Date.now() - iLastTime;
	var flMois = Math.floor(iTimeDiff / 30.0);
	var flJour = Math.floor((iTimeDiff / 24.0) - Math.floor(flMois));
	var flHeures = Math.floor((iTimeDiff / 60.0) - Math.floor(flJour));
	var flMinutes = Math.floor((iTimeDiff / 60.0) - Math.floor(flHeures));
	var flSecondes = Math.floor((iTimeDiff / 1000.0) - Math.floor(flMinutes));
	
	if (flMois <= 0)
		szFormat += (flMois + " mois, ");
	if (flJour <= 0)
		szFormat += (flJour + " jour, ");
	if (flHeures <= 0)
		szFormat += (flHeures + " heures et ");
	if (flMinutes <= 0)
		szFormat += (flMinutes + " minutes ");
	if (flSecondes <= 0)
		szFormat += (flSecondes + " ");

	if (RandomInt(0, 100) < 50)
	{
		szMsg = szMessageArraylegay2[RandomInt(0, szMessageArraylegay2.lenght)] + szFormat;
	}
	else
	{
		szMsg = szFormat + szMessageArraylegay2[RandomInt(0, szMessageArraylegay2.lenght)];
	}
	
	pChannel.send(szMsg);
	iLastTime = Date.now();
}

function __s_ChatCmd_list(pChannel, args)
{
	var szMsg = gCmdSys.PrintCommand();
	pChannel.send(szMsg);
}

console.log("chat_command::Scope declare");

gCmdSys.RegisterCCmd("stepipoule", __s_ChatCmd_stepipoule);
gCmdSys.RegisterCCmd("legay", __s_ChatCmd_legay);
gCmdSys.RegisterCCmd("list", __s_ChatCmd_list);

console.log("chat_command::Scope startup");
