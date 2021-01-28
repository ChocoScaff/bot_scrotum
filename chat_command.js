//#define CHAT_COMMAND(cmd, pfn)

function RandomInt(iMin, iMax)
{
	return ((Math.random() * (iMax - iMin)) + iMin);
}

var szMessageArray = 
[
	"MSG_1",
	"MSG_2"
];

//CHAT_COMMAND(stepipoule)
function __s_ChatCmd_stepipoule(pChannel, args)
{
	pChannel.send(RandomInt(0, szMessageArray.lenght));
}
new CChatCommand("stepipoule", __s_ChatCmd_stepipoule);

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
//CHAT_COMMAND(legay)
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

	if (RandomInt(0, 1)
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
new CChatCommand("legay", __s_ChatCmd_legay);
