var audioElement = document.querySelector("video");
var textTrack = audioElement.textTracks[0];
textTrack.mode = 'hidden';
console.log(textTrack);
var data = document.getElementById("data");
data.innerHTML = "Sous-titres ici !";
textTrack.oncuechange = function (){
    // "this" est un textTrack
    var cue = this.activeCues[0]; // on suppose qu’on a 1 seul index.
        if (!!cue) {
            data.innerHTML = cue.startTime + "-" +
            cue.endTime + ": " +
            cue.text + "<br />";
        }
}