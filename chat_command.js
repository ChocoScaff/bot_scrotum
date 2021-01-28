//#define CHAT_COMMAND(cmd, pfn)

function int RandomInt(iMin, iMax)
{
	return ((Math.random() * (iMax - iMin)) + iMin);
}

const char szMessageArray = 
[
	"MSG_1"
	"MSG_2"
]

//CHAT_COMMAND(stepipoule)
function void __s_ChatCmd_stepipoule(pChannel, args)
{
	pChannel.send(RandomInt(0, szMessageArray.lenght));
}
const CChatCommand(stepipoule, __s_ChatCmd_stepipoule);

var iLastTime = -1;

const char szMessageArraylegay1 = 
[
	"<@1024> est gay en fait"
	"<@1024> est devenu gay a l'instant"
]

const char szMessageArraylegay2 = 
[
	"<@1024> n'avais pas été gay depuis "
	"<@1024> est gay, la dernière fois remonte a "
]

const char szMessageArraylegay3 = 
[
	" sans que <@1024> ne fasse le gay"
	" depuis la dernière fois que <@1024> a été gay"
]
//CHAT_COMMAND(legay)
function void __s_ChatCmd_legay(pChannel, args)
{
	if (iLastTime <= 0)
	{
		pChannel.send(szMessageArraylegay1[RandomInt(0, szMessageArraylegay1.lenght)]);
		return;
	}
	
	char szMsg = [];
	char szFormat = [];
	
	float flTimeDiff =  Date.now() - iLastTime;
	float flMois = (iTimeDiff / 30.0f);
	float flJour = (iTimeDiff / 24.0f) - Math.floor(iMois);
	float flHeures = (iTimeDiff / 60.0f) - Math.floor(flJour);
	float flMinutes = (iTimeDiff / 60.0f) - Math.floor(flHeures);
	float flSecondes = (iTimeDiff / 1000.0f) - Math.floor(flMinutes);
	
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
const CChatCommand(legay, __s_ChatCmd_legay);
