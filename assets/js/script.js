// baseUrl = "https://api.github.com/users"
// url User = https://api.github.com/users/erc83/repos?page=1per_page=1

/*
fetch("https://api.github.com/users")
.then(response => response.json())
.then(data => console.log(data))
*/

const request = async (url) => {
    const fetch_url = await fetch(url)
    const response = fetch_url.json()
    return console.log(response)
}
// request("https://api.github.com/users")

const getUser = async (usuario) => {
    const url = `https://api.github.com/users/${usuario}`
    return await request(url)
}
getUser("erc83")
//getUser()

const getRepositorios = async (usuario, pag, repos_pag) => {
    const url = `https://api.github.com/users/${usuario}/repos?page=${pag}per_page=${repos_pag}`
    return await request(url)
}
getRepositorios("erc83",1,1 )



let formulario = document.querySelector("form")

let buscador = (event) => {
    event.preventDefault()
    let usuario = document.getElementById("nombre").value
    let pag = parseInt(document.getElementById("pagina").value)
    let repos_pag = parseInt(document.getElementById("repoPagina").value)

    let resultados = document.getElementById("resultados")

    if (usuario, pag, repos_pag){

    }else{
        alert("No se puede consultar")
    }
}

formulario.addEventListener("submit", buscador)







