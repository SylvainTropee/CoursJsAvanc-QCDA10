const BASE_URL = "https://geo.api.gouv.fr"

async function callApi(url) {

    let response = await fetch(url)

    if (response.status === 200 || response.ok) {
        return response.json()
    }
}

async function getDepartements() {
    let data = await callApi(`${BASE_URL}/departements`)

    const dep = document.getElementById('dep')

    data.forEach(function (val) {
        const option = document.createElement('option')
        option.value = val.code
        option.innerText = `${val.code} - ${val.nom}`
        dep.append(option)
    })
}

async function getCities() {
    let data = await callApi(`${BASE_URL}/departements/${this.value}/communes?fields=nom,code,codesPostaux`)

    const dep = document.getElementById('cities')
    dep.innerHTML = "<option value=\"\" selected disabled>- Communes -</option>"

    data.forEach(function (val) {
        const option = document.createElement('option')
        option.value = val.code
        option.innerText = `${val.codesPostaux.join(",")} - ${val.nom}`
        dep.append(option)
    })
}

async function getCity() {

    let data = await callApi(`${BASE_URL}/communes/${this.value}`)
    console.log(data)

    let p = document.createElement('p')
    p.innerText = `Nom : ${data.nom}, Population : ${data.population}, CP : ${data.codesPostaux.join(",")}`
    document.body.append(p)
}

window.onload = function () {
    document.getElementById('dep').addEventListener("change", getCities)
    document.getElementById('cities').addEventListener("change", getCity)
    getDepartements()
}







