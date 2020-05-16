/**
*Épisode 4 de la SAISON 2 : la balade
*Ecrire un programme qui demande la date de naissance d’un utilisateur et 
*vérifie si la date saisie est au format ​JJ/MM/AAAA.​ Exemple : 13/05/2020.
*/

//Récupération de la date de naissance.
 var anniversaire = (prompt("Quel est votre date de naissance ? Ex. 12/12/1935"));
 var anniv2 =/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;
   
  if(!anniv2.test(anniversaire.value)) 
  {
    alert("votre date de naissance est " + anniversaire); 
  } 
  else 
  {
    alert("Mauvaise date !"); 
  }