/*Épisode 9 de la SAISON 2 : la balade*/

/*Ecrire une fonction qui prend un nombre en paramètre et 
affiche sa table de multiplication en console.*/
function multiplication(somme, y){
var somme = parseInt(prompt("Veuillez insérer n'importe quel nombre pour obtenir votre table de multiplication !"));
while(isNaN(somme)){
	somme = parseInt(prompt("Vous vous êtes trompé... Veillez insérer uniquement des chiffres pour votre table de multiplication"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
var x = 10;
var y;

for (var i = 0; i <=10; i++){
	y = somme * i;

	console.log(" "+somme+ "*" +i+ "=", + y); 
	/*Le résultat va s'afficher sur la page web 
	car nous avons utilisé la fonction : "document.write"*/
}
}
	multiplication();