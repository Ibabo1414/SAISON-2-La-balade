/**
*Épisode 3 de la SAISON 2 : la balade
*Ecrire un programme qui demande à l'utilisateur son nom et 
*le nombre d’enfants qu’il a et affiche un résumé.
*Exemples :
*- Marc, vous avez 1 enfant.
*- Luc, vous avez 3 enfants​ ​.
*- Jean, vous n’avez pas d’enfant.
*/

//Récupération du nom
let nom ;
let nombreenfant;

//Ajout d'une boucle pour évité que les utilisateurs insère des'string' au lieu des chiffres.
do {
	nom = (prompt("Quel est votre nom ?"));
    nombreenfant = parseInt(prompt("Vous avez combien d'enfant ?"));;
} while (isNaN(nombreenfant));


let reponse = nom;
let aucunenfant = 0;

if(nom === reponse && nombreenfant > aucunenfant)
{
	alert("Bonjour " + nom +
		"\nVous avez " + nombreenfant + " " +"enfant (s)");
}
else if( nombreenfant <= aucunenfant)
{
    alert("Vous avez aucun enfant" + " " + nom);
}
