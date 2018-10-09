function ex8(){
  var ag = document.getElementById('age').value; // récupération de la valeur saisie dans l'input dans la variable ag
  if(isNaN(ag) || ag < 1){ // si age n'est pas un chiffre ou champ vide
  alert('En chiffre !') // affichage d'un message d'alerte
}else{ //sinon on continue
  if (ag.length >= 4) { //si ag supérieur ou égal à 4 chiffres, 
    alert('petit farceur');
  } else if (ag >= 18) {
    alert('Vous êtes majeur :)'); //Si ag (l'age) est supérieur ou égal à 18 affichage du message "Vous êtes majeur"
  }
  else {
    alert('Vous êtes mineur :('); // Sinon affichage du message "Vous êtes mineur"
  }
}
}
