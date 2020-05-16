/**
*Épisode 6 de la SAISON 2 : la balade
*Ecrire un programme qui demande à l’utilisateur de saisir 
*le numéro d’un jour et renvoie le jour correspondant.
*Exemple :
*- Entrée:3​
*- Sortie : ​Mercredi
*/

//Récupération du numéro de l'utilisateur.
let utilisateur;
let lesjoursdelasemaine = ["Lundi", "Mardi", "​Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
let choix_utilisateur= utilisateur;

// Ajout d'une boucle pour évité que les utilisateurs insèrent des <string> au lieu de chiffres
do{
	utilisateur = parseInt(prompt("insérez n'importe quel nombre: le jour de la semaine"));
}while(isNaN(utilisateur))

//Affichage du jour de la semaine.
console.log (lesjoursdelasemaine [choix_utilisateur]);