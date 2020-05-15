/*Transformer les épisodes 1, 2, 4, 6 et 7 en leur équivalent en fonction.*/


/*Épisode 1 de la SAISON 1 : Mbolo JS*/

/*Dans cette première épisode, il était question 
d'écrire un programme qui affiche à la console M​ bolo JS​.*/
function salutation(message){
var message = "Mbolo Js";
alert (message);
}
	salutation();


/*Épisode 2 de la SAISON 1 : Mbolo JS*/

/* Ecrire un programme qui demande à l'utilisateur son nom et 
affiche une alerte affichant ​Bonjour ​<nom>.​ ​
Où ​<nom> est le nom saisi par l’utilisateur.*/
function renseignement(nom, phrase){
var nom = prompt ("Quel est votre nom ?");
var phrase = "Bonjour";
var nometphrase = phrase + " " + nom;
alert (nometphrase);
}
	renseignement();




/*Épisode 4 de la SAISON 1 : Mbolo JS*/

/*Pour l'épisode 4, il était simplement question d'écrire un programme permettant 
de permuter les valeurs de deux variables. Le résultat est affiché en console.*/
function permutation(nombreymii){
var nombreymii = ["6", "2"];

nombreymii.sort(function(a, b){return 0.5 - Math.random()});
console.log(nombreymii);
}
	permutation();



/*Épisode 6 de la SAISON 1 : Mbolo JS*/


/*Ici, j'ai écris un programme qui demande à l’utilisateur trois 
nombres et affiche la moyenne de ces nombres en alerte.
*/
function lamoyenne(nombreymii){
var x = parseInt(prompt("insérez le prémier nombre"));
while(isNaN(x)){
	x = parseInt(prompt("Vous vous êtes trompé... Veuillez insérer uniquement des chiffres"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
var y = parseInt(prompt("insérez le deuxième nombre"));
while(isNaN(y)){
	y = parseInt(prompt("Vous vous êtes trompé... Veuillez insérer uniquement des chiffres"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
var z = parseInt(prompt("insérez le troisième nombre"));
while(isNaN(z)){
	z = parseInt(prompt("Vous vous êtes trompé... Veuillez insérer uniquement des chiffres"));
	/*JIdem*/
}
var moyenne = parseInt(x) + parseInt(y) + parseInt(z) / 2;
alert (moyenne);
}
	lamoyenne();


/*Épisode 7 de la SAISON 1 : Mbolo JS*/


/*Ecrire un programme qui demande l'âge de l’utilisateur et affiche : ​
Vous êtes mineur​ ou V​ ous êtes majeur​.*/
function lagedelutilisateur(age){
var age = parseInt(prompt("Quel âge avez-vous ?"));
while(isNaN(age)){
	age = parseInt(prompt("Vous vous êtes trompé... Veuillez insérer uniquement des chiffres pour votre âge"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
var annee = "ans)";
var deuxpoints = ":"
var info = "(Votre âge est de :"
var espace = " ";
var utilisateurage = [age];
if(age >= 18)
{
   alert("Vous êtes majeur :"+ espace + info + espace + utilisateurage + espace + annee);
}
else
   alert("Vous êtes mineur"+ espace + info + espace + utilisateurage + espace + annee);
}
	lagedelutilisateur();


