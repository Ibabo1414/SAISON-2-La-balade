/*Ecrire un programme qui demande à l'utilisateur son nom et le nombre d’enfants qu’il a et affiche un résumé.
Exemples :
- Marc, vous avez 1 enfant.
- Luc, vous avez 3 enfants​ ​.
- Jean, vous n’avez pas d’enfant.
*/
var nom = (prompt("Quel est votre nom ?")); //L'utilisateur insére son nom.
var nombreenfant = parseInt(prompt("Vous avez combien d'enfant ?")); //L'utilisateur son nombre d'enfant (s).
while(isNaN(nombreenfant)){
	nombre1 = parseInt(prompt("Vous vous êtes trompé... Veuillez indiquer le nombre d'enfant (s) que vous avez !"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
var reponse = nom;
var aucunenfant = 0;

if(nom === reponse && nombreenfant > aucunenfant)
{
	alert("Bonjour " + nom +
		"\nVous avez " + nombreenfant + " " +"enfant (s)");
}
else if( nombreenfant <= aucunenfant)
{
    alert("Vous avez aucun enfant" + " " + nom);
}
