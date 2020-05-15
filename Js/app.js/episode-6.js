/*Ecrire un programme qui demande à l’utilisateur de saisir le numéro d’un jour et renvoie le jour correspondant.
Exemple :
- Entrée:3​
- Sortie : ​Mercredi
*/
var utilisateur = parseInt(prompt("insérez n'importe quel nombre: le jour de la semaine"));
while(isNaN(utilisateur)){
	x = parseInt(prompt("Vous vous êtes trompé... Veuillez insérer uniquement des chiffres"));
	/*J'ai ajouté cette boucle pour évité que les 
	que l'utilisateur insère des'string' au lieu de chiffres*/
}
var lesjoursdelasemaine = ["Lundi", "Mardi", "​Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
var choix_utilisateur= utilisateur;
console.log (lesjoursdelasemaine [choix_utilisateur]);