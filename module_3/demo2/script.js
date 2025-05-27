let pokemon;

fetch("https://pokebuildapi.fr/api/v1/pokemon/850")
    .then((response) => response.json())
    .then((data) => {
        //console.log(data)
        pokemon = data
        console.log(pokemon)
        // let poke = JSON.parse(data)
        // console.log(poke.name)

        const h1 = document.createElement('h1')
        h1.innerText = data.name

        const img = document.createElement('img')
        img.src = data.image

        document.body.append(h1)
        document.body.append(img)

    })


console.log(pokemon)

