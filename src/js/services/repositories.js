import { baseURL, repositoriesQuantity } from "../variables.js";

async function getRepos(userName) {
    const resp = await fetch(`${baseURL}/${userName}/repos?per_page=${repositoriesQuantity}`);
    return await resp.json();
}

export { getRepos };