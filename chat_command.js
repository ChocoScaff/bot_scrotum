console.log("chat_command::Scope entry");

const hCmdSys = require("./commandsystem.js");

console.log("chat_command::Scope include");

var gCmdSys = hCmdSys.gCommandSystem;

console.log("chat_command::Scope declare");

function RandomInt(iMin, iMax)
{
	var range = iMax - iMin;
	var random = Math.random();
	var uniform = random * range;
	var trunc = Math.floor(uniform);
//	console.log("min " + iMin + " max " + iMax + " range " + range + " random " + random + " uniform " + uniform + " trunc " + trunc);
	
	return trunc;
}

function ARRAY_SIZE(pArray)
{
	var size = 0,
	key;
	for (key in pArray)
	{
		if (pArray.hasOwnProperty(key))
			size++;
	}
	
	return size;
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

const szMessageArraystepipoule = 
[
    "Le racisme c'est la peur des étrangers, donc si y'avaient moins d'étrangers y'aurait moins racisme.",
    "L'amour ça fait mal au coeur et au cul.",
    "On n'a pas tous les outils qui nous faut pour réussir, y'a ceux qui ont un râteau pour enlever les feuilles mortes, moi j'ai une pelle.",
    "On m’a dit en gros l’asile c’est en dehors de la ville et déjà l’asile c’est un isolement en soi, bah le mettre loin comme ça ce n'est pas anodin, tu vois. être fou c’est être isolé, incompris, et on vit dans une société.",
    "On attend souvent l'épisode 3 d'une série avec impatience mais parfois vaut mieux pas n'avoir pas de suite plutôt qu'être déçu.",
    "Chère journal, j'ai si mal dormi cette nuit à cause de cette question : il faudrait combien de kilos de pâtes à fixe pour coller par les pieds un humain au plafond? Depuis ce matin j'essaye d'avoir une réponse via l'internet.",
    "J'ai rencontré un complotiste aujourd'hui et je me suis dit, si les complotistes étaient un carburant pour fusée, alors on utiliserait Facebook comme réservoir afin d'aller sur mars pour contempler la terre plate",
    "Mes parents mon déshérité quand j'ai acheté un macbook pour jouer à Fornite",
    "J'ai fait un cauchemar ou je mangé un Kebab pakistanais avec Dieu.",
    "Un poulpe m'a montré son scrotum dans ça camionnette ",
    "Mon père m'a dit les noirs c'est tous des voleurs, mais je ne comprend pas les personnes noir n'existe pas ?!",
    "hyperflex m'a dit que si a trente ans t'as pas de loupitaf t'as raté t'as vie",
    "De nos jours, trop de je t'aime sont prononcés comme les bonjours ",
    "Cette chanson n'a aucun sens et c'est ce qui fait kiffer",
    "J'ai jamais présenté quelqu'un à mes parents et heureusement",
    "L'amour platonique est inacceptable dans la mesure ou il est irréel, et qu'à mon sens, seul l'amour réciproque est vrai.",
    "Je me pose la vraiment la question, je sais pas si c'est la haine ou si vraiment j'ai beaucoup moins de sentiments",
    "Tout le temps je dis je t'aime aux gens maintenant. c'est trop important de le dire,je m'en rend à présent.",
    "Si macron n'existerai pas, il n'y aurait pas de pédés ... Car macron est un pédé.",
    "Le réchauffement climatique c'est à cause des africains, car il fait chaud au ouganda.",
    "Si tu laissez voler un pigeon, il te chie souvent dessus, ne votez pas macron ; proverbe chinois.",
    "Les arabes c'est comme les réductions chez lidl, t'as pas le temps de les voirs passés ils sont déjàs partis",
    "Le deuxième film d'une saga c'est toujours la même merde que le premier, mais en pire ..."
];

function __s_ChatCmd_stepipoule(pChannel, args)
{
	pChannel.send(szMessageArraystepipoule[RandomInt(0, ARRAY_SIZE(szMessageArraystepipoule))]);
}

var iLastTime = -1;

var szMessageArraylegay1 = 
[
	"<@694832068105994273> est gay en fait",
	"<@694832068105994273> est devenu gay a l'instant"
];

var szMessageArraylegay2 = 
[
	"<@694832068105994273> n'avais pas été gay depuis ",
	"<@694832068105994273> est gay, la dernière fois remonte a "
];

var szMessageArraylegay3 = 
[
	" sans que <@694832068105994273> ne fasse le gay",
	" depuis la dernière fois que <@694832068105994273> a été gay"
];

function __s_ChatCmd_legay(pChannel, args)
{
	if (iLastTime <= 0)
	{
		iLastTime = Date.now();
		pChannel.send(szMessageArraylegay1[RandomInt(0, ARRAY_SIZE(szMessageArraylegay1))]);
		return;
	}
	
	var szMsg = "";
	var szFormat = "";
	
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
		szMsg = szMessageArraylegay2[RandomInt(0, ARRAY_SIZE(szMessageArraylegay2))] + szFormat;
	}
	else
	{
		szMsg = szFormat + szMessageArraylegay3[RandomInt(0, ARRAY_SIZE(szMessageArraylegay3))];
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
