$("#tableimage img").click(function () {
    // Récupération du texte à prononcer
    var text = this.id;

    $("#imageactive").html("Tu as cliqué sur : " +text);

    // Speak!!
    var utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
});
