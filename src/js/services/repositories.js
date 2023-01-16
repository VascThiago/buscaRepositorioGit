import { baseURL, repositoriesQuantity } from "../variables.js";

//Configurando a API para pegar os repositórios do GitHub do usuário
async function getRepos(userName) {
    const resp = await fetch(`${baseURL}/${userName}/repos?per_page=${repositoriesQuantity}`);
    return await resp.json();
}

export { getRepos };