
class House{

    _type
    area
    #brand

    constructor(type, area, brand = "") {
        this._type = type
        this.area = area
        this.#brand = brand
    }

    description(){
        console.log(`${this._type}, ${this.area}, ${this.#brand}`)
    }

    get type(){
        return this._type
    }


    get brand() {
        return this.#brand;
    }

    set brand(value) {
        this.#brand = value;
    }
}

const house = new House("maison", 100, "Century 21")
house.brand = "La Forêt"
console.log(house.brand)
console.log(house)
console.log(house.type)
console.log(house._type)

//fonctionnalités ES6
//separator
const million = 1_000_000
console.log(million)

//opérateur de nullité

let user = {
    name : "Michel",
    address : null
}

console.log(user.address?.street ?? "Rue des acacias")

//spread
let tab1 = [1,2,3]
let tab2 = [10,20,30]

tab1.push(...tab2)
console.log(tab1)

function test(...args){
    console.log(args)
}
test("coucou")
test("coucou", 2, "michel")






