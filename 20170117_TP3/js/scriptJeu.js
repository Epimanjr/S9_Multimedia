// Liste des mots possibles
liste = ["poulet", "dragon", "canard", "cheval", "kangourou", "lama", "lapin", "souris", "planete"];
// Mot à trouver actuellement
currentToFind = "";

// Ajoute un mot à faire correspondre avec une image
function addToFind() {
  currentToFind = liste[parseInt(Math.random()*liste.length)];
  $("#tofind").html(currentToFind);
}

// Lors d'un clique sur une image
$("#tableimage img").click(function () {
    // Récupération du mot correspondant à l'image
    var text = this.id;

    // Vérification de la réponse et choix du texte à prononcer
    var right = text === currentToFind;
    var tospeak = (right) ? "Félicitations !" : "Raté... Essaye encore !";

    // Prononciation du résultat
    var utterance = new SpeechSynthesisUtterance(tospeak);
    utterance.lang = 'fr-FR';
    window.speechSynthesis.speak(utterance);

    // Si le joueur a trouvé, on recommence
    if(right) {
      addToFind();
    }
});

// Ajout d'un nouveau mot à trouver
addToFind();
