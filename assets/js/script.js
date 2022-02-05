// baseUrl = "https://api.github.com/users"
// url User = https://api.github.com/users/erc83/repos?page=1per_page=1


fetch("https://api.github.com/users")
.then(response => response.json())
.then(data => console.log(data))


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
//getUser("erc83")
getUser()

const getRepositorios = async () => {
    const url = `https://api.github.com/users/erc83/repos?page=1per_page=1`
    return await request(url)
}
getRepositorios()






