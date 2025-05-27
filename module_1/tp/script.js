import {dico} from "./dico.js";

let tries = 5
let randomWord = getRandomWord()
console.log(randomWord)

function getRandomWord() {
    let num = Math.floor(Math.random() * dico.length)
    return dico[num];
}

function generateLetters() {

    for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
        const letter = String.fromCharCode(i)
        const button = document.createElement('button')
        button.innerText = letter
        button.value = letter
        document.getElementById('letters').append(button)

        button.addEventListener("click", checkLetter)
    }
}

function displayWord() {
    const wordToFind = document.getElementById('wordToFind')
    wordToFind.innerText = randomWord.replace(/[A-Z]/gi, "_")
}

function checkLetter() {
    console.log(this.value)
    let isLetterCorrect = false;
    let randomDomWord =
        document.getElementById('wordToFind').innerText.split("")
    console.log(randomDomWord)
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === this.value) {
            randomDomWord[i] = this.value
            isLetterCorrect = true
        }
    }
    document.getElementById('wordToFind').innerText = randomDomWord.join("")

    if (!isLetterCorrect) {
        document.getElementById('tries').innerText = --tries
    }

    checkwin()
}

function checkwin() {
    let randomDomWord =
        document.getElementById('wordToFind').innerText
    if (randomDomWord === randomWord && tries > 0) {
        document.getElementById('wordToFind').innerText = `Bravo c'est gagné ! Le mot était ${randomWord}`
    }

    if (tries <= 0) {
        alert("T'es un looser ! Rejoue !")
    }
}

function init() {
    generateLetters()
    displayWord()
    document.getElementById('reset').addEventListener("click", function (){
        window.location.reload()
    })
}

window.onload = init



