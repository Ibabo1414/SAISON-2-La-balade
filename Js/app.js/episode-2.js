/* Ecrire un programme qui demande à l'utilisateur de renseigner un mot de passe et 
vérifie si ce mot de passe obéit aux critères suivants :
- 8 caractères minimum
- contient une majuscule
- contient au moins un chiffre*/
  var password = prompt("Veuillez entrer votre mot de passe");
/*L'utilisateur insère son mot de passe*/
  var regex =(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/) ;
   
  if(!regex.test(password.value) && (password.length <= 8)) 
  {
    alert("Votre mot de passe a été confirmé"); 
  } 
  else 
  {
    alert("Votre mot de passe n'a pas a été confirmé... Veuillez saisir correctement votre mot de passe !"); 
  }
