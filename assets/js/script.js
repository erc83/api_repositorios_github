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
    return response
}
// request("https://api.github.com/users")

const getUser = async (usuario) => {
    const url = `https://api.github.com/users/${usuario}`
    return await request(url)
}
//getUser("erc83")
//getUser()

const getRepositorios = async (usuario, pag, repos_pag) => {
    const url = `https://api.github.com/users/${usuario}/repos?page=${pag}per_page=${repos_pag}`
    return await request(url)
}
//getRepositorios("erc83",1,1 )

let formulario = document.querySelector("form")

let buscador = (event) => {
    event.preventDefault()
    let nombre = document.getElementById("nombre").value
    let pagina = parseInt(document.getElementById("pagina").value)
    let reposPagina = parseInt(document.getElementById("repoPagina").value)

    let resultados = document.getElementById("resultados")

    if (nombre && pagina && reposPagina){
        Promise.all([getUser(nombre), getRepositorios(nombre, pagina, reposPagina)])
        .then(resp => {
            console.log(resp)
        })


    }else{
        alert("No se puede consultar")
    }
}

formulario.addEventListener("submit", buscador)







