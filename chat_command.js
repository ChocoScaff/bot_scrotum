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
    "Mon père m'a dit les noirs c'est tous des voleurs, mais je ne comprend pas les personnes noir n'existent pas ?!",
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
    "Le deuxième film d'une saga c'est toujours la même merde que le premier, mais en pire ...",
    "Les racistes ils aiment trop crier FORT quand on les frappe en mode ils comprennent pas pourquoi",
    "Ceux qui veulent poster des photos de gonzesses qui veulent se faire sauter : On accepte ou on s'en va, mais on ne sort pas des trucs du style ''Mec, c'est pas un serveur pour voir du porno, va sur PornHub''. Arrêtez de vouloir tout le temps plier les gens selon votre vision du monde.",
    "Hier j'ai appelé mon wifi ''hack me if you can''. Aujourd'hui il sappelle ''challenge accepted''. ",
    "Pour vous je suis une Poule ou un Poulet ? Attention à pas confondre genre et identité de genre !!",
    "La vie c'est comme un penis, elle est courte et les femmes la rendent dure sans raison",
    "les hommes hétérosexuels savent très bien que la misogynie ça dégoûte les femmes mais ils continuent à faire des blagues misogynes pour avoir la validations des autres hommes ? c’est juste que vous êtes homosexuels je pense",
    "Mon opinion sur l'avortement est comme une lame à double tranchant. Je veux dire, j'aime l'idée de tuer des bébés, mais je n'aime pas l'idée de donner aux femmes la chance de prendre des décisions ",
    "Tu prends t'es caleçons et tu hors de ma vue",
    "Les policiers c'est bien, sauf quand ils t'enfoncent la mattraque de le fion",
    "La vie est courte donc n'apelle pas ta bite la vie",
    "les furries c'est comme les chips, quand tu les as tous bouffés y'en à plus",
    "Les hipsters, c'est des gens qui ont pas compris que dans la vie il faut évoluer",
    "J'ai écrit le scénario d'un film, Avec sa bite dans un sandwich Jeremy inventa le hotdog, il parcouru la Turquie pour apprendre les plus grandes techniques de maitre kébabié et créa son propre stand de hotdog une aventure a vivre en famille attention risque d'éréction a ne pas regarder si vous souffrez d'anémie",
    "'Changez pas, améliorez.' Cette phrase, que j'ai pratiquement aléatoirement composée, n'est peut-être pas si fausse... :thinking: Ça a du sens. Je crois que un des problèmes de l'humanité est notre obsession à vouloir toujours tout changer... Au lieu d'améliorer",
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
	
	var flTimeDiff =  Math.floor((Date.now() - iLastTime) / 1000);
	var flMois = Math.floor(flTimeDiff / (30.0 * 24.0 * 60.0 * 60.0));
	var flJour = Math.floor((flTimeDiff / (24.0* 60.0 * 60.0)));
	var flHeures = Math.floor((flTimeDiff / (60.0* 60.0)));
	var flMinutes = Math.floor((flTimeDiff / 60.0));
	var flSecondes = Math.floor(flTimeDiff);
	
	flSecondes -= (flMinutes * 60.0);
	flMinutes -= (flHeures * 60.0);
	flHeures -= (flJour * 24.0);
	flJour -= (flMois * 30.0);
	
	if (flMois > 0)
		szFormat += (flMois + " mois, ");
	if (flJour > 0)
		szFormat += (flJour + " jour, ");
	if (flHeures > 0)
		szFormat += (flHeures + " heures et ");
	if (flMinutes > 0)
		szFormat += (flMinutes + " minutes ,");
		
	szFormat += (flSecondes + " secondes");

	if (RandomInt(0, 100) < 50)
	{
		szMsg = szMessageArraylegay2[RandomInt(0, ARRAY_SIZE(szMessageArraylegay2))] + szFormat;
	}
	else
	{
		szMsg = szFormat + szMessageArraylegay3[RandomInt(0, ARRAY_SIZE(szMessageArraylegay3))];
	}
	
//	console.log("diff " + flTimeDiff + ", mois " + flMois + ", jour " + flJour + ", heure " + flHeures + ", minute " + flMinutes + ", sec " + flSecondes);
//	console.log(szMsg);
	pChannel.send(szMsg);
	iLastTime = Date.now();
}

function __s_ChatCmd_pileouface(pChannel, args)
{
    var RNG;
    {
    RNG = RandomInt(0,2); // nombre aléatoire
    if (RNG == 0)
    {
    pChannel.send("pile"); // Prende un mots dans la variable et l'envoie sur le serveur
    }
    if (RNG == 1)
    {
    pChannel.send("face"); // Prende un mots dans la variable et l'envoie sur le serveur
    }
    }
}
function __s_ChatCmd_test(pChannel, args)
{
	pChannel.send("Reçu, le bot n'est pas down :yum: !");
}
function __s_ChatCmd_gay(pChannel, args)
{
    var RNG;
    {
    RNG = RandomInt(0,6); // nombre aléatoire
    if (RNG == 0)
    {
    pChannel.send("je suis gay"); // Prende un mots dans la variable et l'envoie sur le serveur
    }
    if (RNG == 1)
    {
    pChannel.send("tu est gay"); // Prende un mots dans la variable et l'envoie sur le serveur
    }
    if (RNG == 2)
    {
    pChannel.send("il est gay");
    }
    if (RNG == 3)
    {
    pChannel.send("nous sommes gays");
    }
    if (RNG == 4)
    {
    pChannel.send("vous etes gays");
    }
    if (RNG == 5)
    {
    pChannel.send("ils sont gays");
    }
    }
}

function __s_ChatCmd_list(pChannel, args)
{
	var szMsg = gCmdSys.PrintCommand();
	pChannel.send(szMsg);
}

var szMessageArraycomplot1 = 
[
	"La 5G ",
	"Le wifi",
	"Les cons",
	"Les admins",
	"Les chibas",
	"Half-Life 3",
	"La covid 19 ",
	"Les furrys ",
	"Le curry club ",
	"Les feministes ",
	"Les lgbt+",
	"Les pédés",
	"Les fachos",
	"Le coronavirus",
	"Microsoft",
	"Google",
	"Amazon",
	"Youtube",
	"Twitter",
	"Les islamos gauchiste",
	"Les juifs",
	"Les chinois",
	"Les arabes",
	"Les Noirs",
	"Les meufs",
	"Half life decay",
	"Cod",
	"CS:GO",
	"Windows",
	"Bill gates",
	"steve jobs",
	"les casques vr",
	"les chats",
	"pornhub",
	"Les gacha life",
	"les fans de garri's mod",
	"les youtubeurs",
	"Patrick sébastien",
	"Sébastien Patoche",
	"amazon",
	"hitler",
	"staline",
	"youporn",
	"La nasa",
	"Rick astley"
];

var szMessageArraycomplot2 = 
[
	" est/sont un complot ",
	" est/sont une ruse ",
	" est/sont une connerie",
	" est/sont une mascarade ",
	" est/sont une hallucination collective ",
	" est/sont une machination",
	" est/sont un guide",
	" est/sont une conspiration",
	" est/sont rien",
	" est/sont tentative"
];

var szMessageArraycomplot3 = 
[
	" pour restaurer l'URSS.",
	" pour nous faire voter macron.",
	" pour vaincre le capitalisme.",
	" pour rendre <@694832068105994273> gay",
	" pour empêcher la sortie de stepipoule épisode 3",
	" pour tuer les <@&760173621691547708>",
	" pour rendre impuissant les <@&744996855133503569>",
	" afin de tuer les <@&732643483684438107>",
	" pour ressuciter Hitler",
	" pour ressuciter Staline",
	" pour rendre le coronavius plus fort",
	" pour ne rien faire",
	" pour donner du pouvoir aux furries",
	" pour tester les homosexuels",
	" pour Restaurer une dictautre",
	" pour nous envoyer des ondes dans le cerveau afin de le dérégler",
	" pour rendre plus fort mélanchon",
	" pour faire élire Mélanchon",
	" pour trouver une source illimitée d'energie",
	" pour que le Makron domine le monde",
	" pour empecher le prochain E3",
	" pour détruire la lune",
	" pour rétablir le nazisme",
	" pour nourrir les gays",
	" pour apprendre aux gays comment qu'on devient hétéro",
	" pour convertir les hétéros en bi",
	" pour au final, rajouter des phrases au bot stépipoule",
	" pour tuer rick astley",
	" pour rickroll les <@&732643483684438107>",
	" pour affaiblir mao-zeg hong",
	" afin de provoquer une famine",
	" pour faire un gros dongcopter"
];

function __s_ChatCmd_complot(pChannel, args)
{
	var message = szMessageArraycomplot1[RandomInt(0, ARRAY_SIZE(szMessageArraycomplot1))] + szMessageArraycomplot2[RandomInt(0, ARRAY_SIZE(szMessageArraycomplot2))] + szMessageArraycomplot3[RandomInt(0, ARRAY_SIZE(szMessageArraycomplot3))];
	pChannel.send(message);
	//pChannel.send(szMessageArraycomplot1[RandomInt(0, ARRAY_SIZE(szMessageArraycomplot1))]);
	//pChannel.send(szMessageArraycomplot2[RandomInt(0, ARRAY_SIZE(szMessageArraycomplot2))]);
	//pChannel.send(szMessageArraycomplot3[RandomInt(0, ARRAY_SIZE(szMessageArraycomplot3))]);
}

console.log("chat_command::Scope declare");
//Les registre chat que peuve faire le bot
gCmdSys.RegisterCCmd("stepipoule", __s_ChatCmd_stepipoule);
gCmdSys.RegisterCCmd("legay", __s_ChatCmd_legay);
gCmdSys.RegisterCCmd("list", __s_ChatCmd_list);
gCmdSys.RegisterCCmd("test", __s_ChatCmd_test);
gCmdSys.RegisterCCmd("pileouface", __s_ChatCmd_pileouface);
gCmdSys.RegisterCCmd("complot", __s_ChatCmd_complot);


console.log("chat_command::Scope startup");
