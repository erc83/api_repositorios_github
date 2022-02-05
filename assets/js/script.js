const request = async (url) => {
    const fetch_url = await fetch(url)
    const response = fetch_url.json()
    return response
}

const getUser = async (usuario) => {
    const url = `https://api.github.com/users/${usuario}`
    return await request(url)
}

const getRepositorios = async (usuario, pag, repos_pag) => {
    const url = `https://api.github.com/users/${usuario}/repos?page=${pag}per_page=${repos_pag}`
    return await request(url)
}

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
            if(resp[0].message == "Not Found" ) {
                alert("El usuario no existe, favor de ingresar otro usuario")
            }else {
                    let repos = ''
                    resp[1].forEach(element  => {
                        repos += `
                        <p><a href="${element.html_url}" target="_blank">${element.name}</a></p>              
                        `
                        element.html_url, element.name
                    })

                    resultados.innerHTML = `
                    <div class="row">
                    <div class="col-12 col-lg-6">
                        <h3>Datos de Usuario</h3>
                        <div class="w-50">
                            <img src="${resp[0].avatar_url}" alt="" class="img-fluid">
                        </div>
                        <p>Nombre de usuario: ${resp[0].name}</p>
                        <p>Nombre de login: ${resp[0].login}</p>
                        <p>Cantidad de repositorios: ${resp[0].public_repos}</p>
                        <p>Localidad: ${resp[0].location}</p>
                        <p>Tipo de Usuario: ${resp[0].type}</p>
                    </div>
                    <div class="col-12 col-lg-6">
                        <h3>Nombre de Repositosio</h3>
                        ${repos}
                    </div>
                </div>
                `;
            }   
        })
        .catch(err => {
            console.error("err", err)
        })
    }else{
        alert("No se puede consultar")
    }
}
formulario.addEventListener("submit", buscador)







