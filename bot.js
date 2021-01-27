const Discord = require('discord.js'); // Chargement de la librairie discord.js

const client = new Discord.Client();  // Création du bot

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)); // Fonction math pour aléatoire
  }

var mots = ["Le racisme c'est la peur des étrangers, donc si y'avais moins d'étrangers y'aurai moins racisme.", "L'amour ça fait mal au coeur et au cul.", "On n'a pas tous les outils qui nous faut pour réussir, y'a ceux qui ont un râteau pour enlever les feuilles mort moi j'ai une pelle.","On m’a dit en gros l’asile c’est en dehors de la ville et déjà l’asile c’est un isolement en soit, bah le mettre loin comme ça c’est pas anodin, tu vois. être fou c’est être isolé, incompris, et on vit dans une societer.","On attend souvent l'épisode 3 d'une série avec impatience mais parfois faut mieux pas n'avoir pas de suite plutôt qu'être déçu.","Chère journal, j'ai si mal dormis cette nuit à cause de cette question : il faudrait combien de kilos de pâte à fixe pour coller par les pieds un humain au plafond? Depuis ce matin j'essaye d'avoir une réponse via l'internet, auriez vous des pistes ?","J'ai rencontré un complotiste aujourd'hui et je me suis dit, si les complotistes étaient un carburant pour fusée, alors on utiliserait facebook comme réservoir afin d'aller sur mars pour contempler la terre plate"];
var aléatoire;

client.on('ready', () => {
    console.log(`Je suis prêt !`); // On affiche un message de log dans la console (ligne de commande), lorsque le bot est démarré
    
});

client.on("message", message => {
    if((message.content === "!stepipoule")) //Si un utilisateur envoie un message "cc" le bot répond
    {
    //message.channel.send("Coucou"); 
    aléatoire = getRandomInt(7); // nombre aléatoire
    message.channel.send(mots[aléatoire]); // Prende un mots dans la variable et l'envoie sur le serveur
    console.log("J'ai envoyé un message"); // confirmation dans la console
    }
})

client.on('error', console.error); // Afficher les erreurs

// Lancement du bot, avec le token spécifié (que vous avez généré précédemment)
client.login('Token_discord');
