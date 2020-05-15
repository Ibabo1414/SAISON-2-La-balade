
/*Épisode 1 de la SAISON 2 : la balade*/

/*Ecrire un programme qui demande à l’utilisateur son adresse e-mail et 
renvoie un message en cas d’erreur si l’adresse e-mail n’est pas correctement saisie.*/

var email = prompt("Veuillez entrer votre adresse mail");
var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

   if(!regex.test (email.value))
   {
     alert("Votre mail a été envoyé");
   }
   else
   {
      alert("Votre mail n'a pas a été envoyé... Veuillez saisir correctement votre mail !");
   }
