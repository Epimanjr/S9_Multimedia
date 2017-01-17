$("#tableimage img").click(function () {
    // Récupération du texte à prononcer
    var text = this.id;

    // Speak!!
    var utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
});