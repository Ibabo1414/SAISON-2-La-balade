/*Ecrire un programme qui demande à l’utilisateur de saisir 
toutes ses notes en Mathématiques et affiche sa moyenne.*/
var moyenne1 = parseInt(prompt("insérez votre 1ère moyennes"));
while(isNaN(moyenne1)){
	moyenne1 = parseInt(prompt("Vous vous êtes trompé... Veuillez insérer uniquement des chiffres"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
var moyenne2 = parseInt(prompt("insérez votre 2ème moyennes"));
while(isNaN(moyenne2)){
	moyenne2 = parseInt(prompt("Vous vous êtes trompé... Veuillez insérer uniquement des chiffres"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
var moyenne3 = parseInt(prompt("insérez votre 3ème moyennes"));
while(isNaN(moyenne3)){
	moyenne3 = parseInt(prompt("Vous vous êtes trompé... Veuillez insérer uniquement des chiffres"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
var moyenne4 = parseInt(prompt("insérez votre 4ème moyennes"));
while(isNaN(moyenne4)){
	moyenne4 = parseInt(prompt("Vous vous êtes trompé... Veuillez insérer uniquement des chiffres"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
var moyenne5 = parseInt(prompt("insérez votre 5ème moyennes"));
while(isNaN(moyenne5)){
	moyenne5 = parseInt(prompt("Vous vous êtes trompé... Veuillez insérer uniquement des chiffres"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
var moyenne6 = parseInt(prompt("insérez votre sixième moyennes"));
while(isNaN(moyenne6)){
	moyenne6 = parseInt(prompt("Vous vous êtes trompé... Veuillez insérer uniquement des chiffres"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}

var notes = [, ,];
var totalmoy = (moyenne1 + moyenne2 + moyenne3 + moyenne4 + moyenne5 + moyenne6) / 6;
var message = "Votre moyenne générale est de :";
notes[0] = moyenne1;
notes[1] = moyenne2;
notes[2] = moyenne3;
notes[3] = moyenne4;
notes[4] = moyenne5;
notes[5] = moyenne6;
alert(message +" "+ totalmoy);
