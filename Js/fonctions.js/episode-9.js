/*
*Épisode 9 de la SAISON 2 : la balade
*Ecrire une fonction qui prend un nombre en paramètre et 
*affiche sa table de multiplication en console.
*/

//Éxecution du code
function multiplication(a, b){

//Récupération des données.
let somme = parseInt(prompt("Veuillez insérer n'importe quel nombre pour obtenir votre table de multiplication !"));
let x = 10;
let y;

for (let i = 0; i <=10; i++){
	y = somme * i;

	//Affichage du résultat.
	console.log(" "+somme+ "*" +i+ "=", + y); 
}
}
	multiplication();