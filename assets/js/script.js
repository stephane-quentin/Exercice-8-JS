function ex8(){
  var ag = document.getElementById("age").value; // récupération de la première variable que l'on a tapé dans la page html
  if (ag >= 18) {
    alert("Vous êtes majeur :)"); //Si ag (l'age) est supérieur ou égal à 18 affichage du message "Vous êtes majeur"
  } else {
    alert("Vous êtes mineur :("); // Sinon affichage du message "Vous êtes mineur"
  }
}
