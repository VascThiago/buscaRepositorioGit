import { baseURL, repositoriesQuantity } from "../variables.js";

//Configurando a API para pegar os eventos do GitHub do usuário
async function getEvents(userName) {
    const resp = await fetch(`${baseURL}/${userName}/events?per_page=${repositoriesQuantity}`);
    // console.log(resp.json());
    return await resp.json();
}

export { getEvents };