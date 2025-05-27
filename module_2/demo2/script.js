const house = {
    type : "maison",
    area : 100,
    description : function(){
        return `${this.type} de ${this.area} m²`;
    }
}

console.log(house.type)
console.log(house.description())
house.dog = true
console.log(house)

function House(type, area = 0){
    this.type = type
    this.area = area
    this.description = function(){
        return `${this.type} de ${this.area} m²`;
    }
}

const yourte = new House("yourte", 50)
const van = new House("Van", 15)
const tente = new House("Tente")

tente.mark = "Quechua"

House.prototype.price = 150

console.log(yourte)
console.log(van)
console.log(tente)


