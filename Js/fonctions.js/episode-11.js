/**
*Épisode 1 de la SAISON 1 : Mbolo JS
*Transformer les épisodes 1, 2, 4, 6 et 7 en leur équivalent en fonction.
*Dans cette première épisode, il était question 
*d'écrire un programme qui affiche à la console M​ bolo JS​.
*/

//Éxécution du code
function salutation(message){
let message = "Mbolo Js";

//Affichage du message.
alert (message);
}
	salutation();


/**
*Épisode 2 de la SAISON 1 : Mbolo JS
* Ecrire un programme qui demande à l'utilisateur son nom et 
*affiche une alerte affichant ​Bonjour ​<nom>.​ ​
*Où ​<nom> est le nom saisi par l’utilisateur.
*/

//Éxécution du code
function renseignement(nom, phrase){

//Récupération des données.
let nom = prompt ("Quel est votre nom ?");
let phrase = "Bonjour";
let nometphrase = phrase + " " + nom;

//Affichage du message et nom
alert (nometphrase);
}
	renseignement();


/**
*Épisode 4 de la SAISON 1 : Mbolo JS
*Pour l'épisode 4, il était simplement question d'écrire un programme permettant 
*de permuter les valeurs de deux variables. Le résultat est affiché en console.
*/

//Éxécution du code
function permutation(nombreymii){

//Tableau
let nombreymii = ["6", "2"];

nombreymii.sort(function(a, b){return 0.5 - Math.random()});
//Affichage du resultat
console.log(nombreymii);
}
	permutation();



/**
*Épisode 6 de la SAISON 1 : Mbolo JS
*Ici, j'ai écris un programme qui demande à l’utilisateur trois 
*nombres et affiche la moyenne de ces nombres en alerte.
*/

//Éxécution du code
function lamoyenne(nombreymii){

//Récupération des données.
let x = parseInt(prompt("insérez le prémier nombre"));
let y = parseInt(prompt("insérez le deuxième nombre"));
let z = parseInt(prompt("insérez le troisième nombre"));
let moyenne = parseInt(x) + parseInt(y) + parseInt(z) / 2;

//Initialisation des boucles x,y et z
while(isNaN(x)){
	x = parseInt(prompt("Vous vous êtes trompé... Veuillez insérer uniquement des chiffres"));
}

while(isNaN(y)){
	y = parseInt(prompt("Vous vous êtes trompé... Veuillez insérer uniquement des chiffres"));
}

while(isNaN(z)){
	z = parseInt(prompt("Vous vous êtes trompé... Veuillez insérer uniquement des chiffres"));
}
//Affichage de la moyenne.
	alert (moyenne);
}
	lamoyenne();


/**
*Épisode 7 de la SAISON 1 : Mbolo JS
*Ecrire un programme qui demande l'âge de l’utilisateur et affiche : ​
*Vous êtes mineur​ ou V​ ous êtes majeur​.
*/

//Éxécution du code
function lagedelutilisateur(age){
let age = parseInt(prompt("Quel âge avez-vous ?"));

//Initialissation de la boucle.
while(isNaN(age)){
	age = parseInt(prompt("Vous vous êtes trompé... Veuillez insérer uniquement des chiffres pour votre âge"));
}
//Temporaire
let annee = "ans)";
let deuxpoints = ":"
let info = "(Votre âge est de :"
let espace = " ";
let utilisateurage = [age];

//Début
if(age >= 18)
{
   alert("Vous êtes majeur :"+ espace + info + espace + utilisateurage + espace + annee);
}
else
   alert("Vous êtes mineur"+ espace + info + espace + utilisateurage + espace + annee);
}//fin
	lagedelutilisateur();


