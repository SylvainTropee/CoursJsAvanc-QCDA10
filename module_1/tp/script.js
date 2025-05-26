import {dico} from "./dico.js";

let randomWord = getRandomWord()
console.log(randomWord)

function getRandomWord(){
    let num = Math.floor(Math.random() * dico.length)
    return dico[num];
}

function generateLetters(){

    for(let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++){
        const letter = String.fromCharCode(i)
        const button = document.createElement('button')
        button.innerText = letter
        button.value = letter
        document.getElementById('letters').append(button)

        button.addEventListener("click", checkLetter)
    }
}

function displayWord(){
    const wordToFind = document.getElementById('wordToFind')
    wordToFind.innerText = randomWord.replace(/[A-Z]/gi, "_")
}

function checkLetter(){
    console.log(this.value)
}

function init(){
    generateLetters()
    displayWord()
}

window.onload = init



