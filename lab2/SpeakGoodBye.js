/*
var speakWord = "Good Bye";


function speak(name) {
  console.log(speakWord + " " + name);
}
*/

(() => {
    var speakWord = "Good Bye";

    window.goodbyeSpeaker = {
        speak: (name) => console.log(speakWord + " " + name)
    };
})();
