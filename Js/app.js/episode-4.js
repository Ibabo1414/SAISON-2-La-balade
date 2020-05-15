/*Ecrire un programme qui demande la date de naissance d’un utilisateur et 
vérifie si la date saisie est au format ​JJ/MM/AAAA.​ Exemple : 13/05/2020.
*/
 var anniversaire = (prompt("Quel est votre date de naissance ? Ex. 12/12/1935"));
/*L'utilisateur insère sa date de naissance*/
 var format =/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;
   
  if(!format.test(anniversaire.value)) 
  {
    alert("votre date de naissance est " + anniversaire); 
  } 
  else 
  {
    alert("Mauvaise date !"); 
  }