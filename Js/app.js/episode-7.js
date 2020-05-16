/**
*Épisode 7 de la SAISON 2 : la balade
*Ecrire un programme qui demande à l’utilisateur de saisir 
*toutes ses notes en Mathématiques et affiche sa moyenne.
*/

//Récupération des données
let moyenne1 = parseInt(prompt("insérez votre 1ère moyennes"));
let moyenne2 = parseInt(prompt("insérez votre 2ème moyennes"));
let moyenne3 = parseInt(prompt("insérez votre 3ème moyennes"));
let moyenne4 = parseInt(prompt("insérez votre 4ème moyennes"));
let moyenne5 = parseInt(prompt("insérez votre 5ème moyennes"));
let moyenne6 = parseInt(prompt("insérez votre sixième moyennes"));

//Calcule de la moyenne générale.
let totalmoy = (moyenne1 + moyenne2 + moyenne3 + moyenne4 + moyenne5 + moyenne6) / 6;

//Ajout du message qui va être affiché sur la boite de dialogue.
let message = "Votre moyenne générale est de :";

//Ajout de chaque donnée de l'utilisateur dans le tableau.
let notes = [, ,];
notes[0] = moyenne1;
notes[1] = moyenne2;
notes[2] = moyenne3;
notes[3] = moyenne4;
notes[4] = moyenne5;
notes[5] = moyenne6;

//Affichage du résultat.
alert(message +" "+ totalmoy);