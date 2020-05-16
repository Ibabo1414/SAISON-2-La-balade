/**
*Épisode 8 de la SAISON 2 : la balade
*Ecrire un programme qui demande de saisir les noms et les moyennes des élèves d’une classe et 
*affiche le premier de la classe (son nom ainsi que sa moyenne).
*/

//Temporaire
let nomeleves;
let moyeleves;
let espace;
let deuxpoint;
let nometmoyenne;

//Insertion des données dans le tableau.
let tableaueleves = [];

//Initialisation de la boucle
while (true){
	nomeleves = prompt("Nom de l'élève");
	moyeleves = parseInt(prompt("Moyenne de l'élève"));
	espace = " ";
	deuxpoint = ":";
	nometmoyenne = espace + nomeleves + espace + deuxpoint + espace + moyeleves;

//Début
if(nomeleves != '')
	{
		tableaueleves.push(nometmoyenne);
	}
else 
	{
		break; 
	}//fin

	//Affichage des noms et moyennes.
} alert(tableaueleves);

