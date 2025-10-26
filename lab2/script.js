/*
var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for () {


  if () {

  } else {

  }
}
*/

//рішення з використанням charAt()  та toLowerCase()
console.log("Метод за першою літерою з використанням charAt()  та toLowerCase()");
(() => {
    const names = ["Bill", "John", "Jen", "Jason", "jama", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"]

    for (let i = 0; i < names.length; i++) {
        const name = names[i]
        const firstLetter = name.charAt(0).toLowerCase();

        firstLetter === "j"
            ? goodbyeSpeaker.speak(name)
            : helloSpeaker.speak(name)
    }
})();



//оригінальні способи селекціонування імен
(() => {
    const names = ["Vika", "John", "Jen", "Jason", "jJjama", "Bob", "Laura", "Jim"]

    // =================================================================================================================
    // РІШЕННЯ 1 -> Побітова перевірка першої літери
    // ===========================================
    console.log("Побітова перевірка ASCII-коду\nЛогіка:Goodbye, якщо перша літера 'j' / 'J'");


    const J_LOWERCASE_ASCII_CODE = 106

    names.forEach(name => {
        const firstLetterCode = name.charCodeAt(0);

        (firstLetterCode | 32) === J_LOWERCASE_ASCII_CODE
            ? goodbyeSpeaker.speak(name)
            : helloSpeaker.speak(name)
    });

    // =================================================================================================================
    // РІШЕННЯ 2 -> Сума ASCII-кодів
    // =================================================================================================================
    console.log("Метод 'Сума ASCII-кодів'\nЛогіка: Goodbye, якщо сума кодів > 400, інакше Hello");

    const asciiThreshold = 400

    const getAsciiSum = (str) => {
        let sum = 0
        for (let i = 0; i < str.length; i++) {
            sum += str.charCodeAt(i);
        }return sum
    }

    names.forEach(name => {
        const sum = getAsciiSum(name)
        if (sum > asciiThreshold) {
            goodbyeSpeaker.speak(name)
        } else {
            helloSpeaker.speak(name)
        }
    })

    // =================================================================================================================
    // РІШЕННЯ 3 -> Перевірка останньої літери
    // =================================================================================================================
    console.log("Метод 'Перевірка останньої літери'\nЛогіка: Goodbye, якщо ім'я закінчується на 'a', інакше Hello");

    names.forEach(name => {
        const lastLetter = name.slice(-1).toLowerCase();

        if (lastLetter === 'a') {
            goodbyeSpeaker.speak(name)
        } else {
            helloSpeaker.speak(name)
        }
    })
})()