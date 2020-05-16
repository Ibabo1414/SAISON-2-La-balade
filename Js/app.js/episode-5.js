//Épisode 5 de la SAISON 2 : la balade
//Ecrire un programme qui :
//- demande à l'utilisateur de saisir son nom, prénom ainsi que son sexe ;
//- stocke ces informations dans un ​objet;​
//- ajoute une clé ​titre à cet objet ayant comme valeur ​M
//ou ​Mme ​en fonction du sexe de l’utilisateur;
//- Affiche l’objet en console.

//Récupération des données de l'utilisateur.
let votrenom = prompt("Quel est votre nom ?");
let prenom = prompt("Quel est votre prenom ?");
let sexe = prompt("Quel est votre sexe ?");

if(sexe === "homme" || sexe === 'HOMME' || sexe === 'Homme' || sexe === 'H' || sexe === 'h')
{
// Affichage des informations 
   console.log("Monsieur" + " " + votrenom + " " +prenom +
   			"\nSexe : " + sexe);
}
else if(sexe === 'femme' || sexe === 'FEMME' || sexe === 'Femme' || sexe === 'F' || sexe === 'f')
{
// Affichage des données   
	console.log("Madame" + " " + votrenom + " " +prenom +
		"\nSexe : " + sexe);
}