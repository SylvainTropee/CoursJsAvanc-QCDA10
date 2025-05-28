async function callApi() {

    let response =  fetch("http://api.open-notify.org/iss-now.json")
    console.log(response)
    let response2 =  fetch("http://api.open-notify.org/iss-now.json")
    console.log(response2)

    let result = await Promise.all([response, response2])
    console.log(result)
    if(response.ok){
        return response.json()
    }
}

async function getIssPosition() {
    let data = await callApi()
    console.log(data)
}

getIssPosition()
