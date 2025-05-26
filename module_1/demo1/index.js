//déclarations
let beer = "Heineken !";
let year = 2025;

let beers = ['Paix-Dieu', 'La chouffe', 'Kro'];

console.group("Michel")

console.log(typeof beer)
console.log(typeof beers)

console.table(beers)

console.groupEnd()

//structure de code
for (const b of beers) {
    console.log(b)
    if (b === 'Kro') {
        console.log("Beurk !")
    }
}
console.log("------------------------------")
for (let i = 0; i < beers.length; i++) {
    console.log(beers[i])
}

//fonctions
function getBeer(index) {
    return beers[index]
}

console.log("------------------------------")
console.log(getBeer(0))

//anonyme
const getBeer2 = function (index) {
    return beers[index]
}
console.log("------------------------------")
console.log(getBeer2)
console.log(getBeer2(1))

//flêchée
const getBeer3 = (index) => beers[index]
const getBeer4 = (index) => { return beers[index] }

console.log("------------------------------")
console.log(getBeer3(2))
console.log(getBeer4(0))










