$("#btn-snap").click(function () {
    // Que faire quand on clique sur le bouton ? réponse ici : 

    // 1°) Récupération de l'image 
    var c = document.getElementById("inputCanvas");
    var ctx = c.getContext("2d");
    var imgData = ctx.getImageData(0, 0, 320, 240);

    // 2°) Mise en place de l'image
    var c2 = document.getElementById("outputCanvas");
    var ctx2 = c2.getContext("2d");
    ctx2.putImageData(imgData, 0, 0);
});


