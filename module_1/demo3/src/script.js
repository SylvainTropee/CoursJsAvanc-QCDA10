
const beers = ['Paix-Dieu', 'La chouffe', 'Kro', 'Maximator', '86', 'Leffe'];

//récupérer le select
const selectBeer = document.getElementById('selectBeer')
//boucles sur le tableau
beers.forEach(function (value){
    let option = document.createElement('option')
    option.value = value.toLowerCase()
    option.innerText = value
    selectBeer.append(option)
})
let p = document.createElement('p')
document.body.append(p)
selectBeer.addEventListener("change", function(){
    console.log(this)
    //let p = document.createElement('p')
    p.innerText = this.value
    p.style.textTransform = "capitalize"
})













