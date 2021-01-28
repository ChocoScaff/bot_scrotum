const Discord = require('discord.js'); // Chargement de la librairie discord.js

const client = new Discord.Client();  // Création du bot

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)); // Fonction math pour aléatoire
  }

var mots =
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
    "Mon père m'a dit les noirs c'est tous des voleurs, mais je ne comprend pas les personnes noir n'existe pas ?!"
    "hyperflex m'a dit que si a trente ans t'as pas de loupitaf t'as raté t'as vie"
];

client.on('ready', () => {
    console.log(`Je suis prêt !`); // On affiche un message de log dans la console (ligne de commande), lorsque le bot est démarré    
});

var RNG; //convention de nommage (random number generator), et surtout pas d'accent dans du code (excepté les commentaires et les strings)

client.on("message", message => {
    if((message.content === "!stepipoule")) //Si un utilisateur envoie le message "!stepipoule" le bot répond
    {
        //message.channel.send("Coucou"); 
        RNG = getRandomInt(mots.length); // <== J'ai remplacé le 7 par la longueur du tableau "mots"
        message.channel.send(mots[RNG]); // Prende un mots dans la variable et l'envoie sur le serveur
        console.log("J'ai envoyé un message"); // confirmation dans la console
    }
})

client.on('error', console.error); // Afficher les erreurs

// Lancement du bot, avec le token spécifié (que vous avez généré précédemment)
client.login('Token_discord');

