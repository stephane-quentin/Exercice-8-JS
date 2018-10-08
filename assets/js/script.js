function ex8(){
  var ag = document.getElementById("age").value; // récupération de la première variable que l'on a tapé dans la page html
  if(isNaN(ag) || ag==''){ // si age n'est pas un chiffre ou champ vide
    alert('En chiffre !') // affichage d'un message d'alerte
  }else{ //sinon on continue
    if (ag >= 18) {
      alert("Vous êtes majeur :)"); //Si ag (l'age) est supérieur ou égal à 18 affichage du message "Vous êtes majeur"
    } else {
      alert("Vous êtes mineur :("); // Sinon affichage du message "Vous êtes mineur"
    }
}
}
