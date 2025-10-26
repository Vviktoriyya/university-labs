/*
var speakWord = "Hello";


function speak(name) {
  console.log(speakWord + " " + name);
}
*/

(() => {
    var speakWord = "Hello";

    window.helloSpeaker = {
        speak: (name) => console.log(speakWord + " " + name)
    };
})();
