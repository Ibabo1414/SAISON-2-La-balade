/*Ecrire un programme qui :
      2
- demande à l'utilisateur de saisir son nom, prénom ainsi que son sexe ;
- stocke ces informations dans un ​objet;​
- ajoute une clé ​titre à cet objet ayant comme valeur ​M
ou ​Mme ​en fonction du sexe de l’utilisateur;
- Affiche l’objet en console.*/
var nom = prompt("Quel est votre nom ?");
var prenom = prompt("Quel est votre prenom ?");
var sexe = prompt("Quel est votre sexe ?");

if(sexe === "homme" || sexe === 'HOMME' || sexe === 'Homme' || sexe === 'H' || sexe === 'h')
{
   console.log("Monsieur" + " " + nom + " " +prenom +
   			"\nSexe : " + sexe);
   /*alert ("Monsieur" + " " + nom + prenom +
		 /*"\nPrénom (s) : " + prenom +*/
}
else if(sexe === 'femme' || sexe === 'FEMME' || sexe === 'Femme' || sexe === 'F' || sexe === 'f')
{
    
console.log("Madame" + " " + nom + " " +prenom +
		"\nSexe : " + sexe);
    /*alert ("Nom (s) : " + cle +" "+ nom + 
		 "\nPrénom (s) : " + prenom +
		  "\nSexe : " + sexe);*/
}
