/*Ecrire une fonction qui prend en paramètre un nombre et 
retourne ​true si le nombre est pair ou ​false ​si le nombre est impair.*/

function paireetimpaire(){
var nombre = prompt("Voulez-vous savoir si un nombre est paire ou impaire ? Saisissez un nombre !");
while(isNaN(nombre)){
	nombre = parseInt(prompt("Vous vous êtes trompé... Veuillez insérer uniquement des chiffres"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
if (nombre%2==0){
	alert ("Ce nombre est paire");
}
 else{
	alert ("Ce nombre est impaire");
}
}
	paireetimpaire()