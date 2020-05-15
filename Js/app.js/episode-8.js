/*Ecrire un programme qui demande de saisir les noms et les moyennes des élèves d’une classe et 
affiche le premier de la classe (son nom ainsi que sa moyenne).
*/
	var tableaueleves = [];

while (true){
	var nomeleves = prompt("Nom de l'élève");
	var moyeleves = parseInt(prompt("Moyenne de l'élève"));
	var espace = " ";
	var deuxpoint = ":";
	var nometmoyenne = espace + nomeleves + espace + deuxpoint + espace + moyeleves;
	if(nomeleves != ''){
		tableaueleves.push(nometmoyenne);
		}else {
			break;
		}
}
	alert(tableaueleves);
/*alert(Math.max(tableaueleves[moyeleves]));*/
