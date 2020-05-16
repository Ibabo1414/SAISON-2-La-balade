/**
*Épisode 10 de la SAISON 2 : la balade
*Ecrire une fonction qui prend en paramètre un nombre et 
*retourne ​true si le nombre est pair ou ​false ​si le nombre est impair.
*/

//Éxécution du code
function paireetimpaire(){
//Récupération des données.
let nombre = prompt("Voulez-vous savoir si un nombre est paire ou impaire ? Saisissez un nombre !");

//Initialisation des données.
while(isNaN(nombre)){
	nombre = parseInt(prompt("Vous vous êtes trompé... Veuillez insérer uniquement des chiffres"));
}
//Début
if (nombre%2==0){
	alert ("Ce nombre est paire");
}
 else{
	alert ("Ce nombre est impaire");
}//Fin
}
	paireetimpaire()