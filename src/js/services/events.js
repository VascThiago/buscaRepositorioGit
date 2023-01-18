import { baseURL, repositoriesQuantity } from "../variables.js";

async function getEvents(userName) {
    const resp = await fetch(`${baseURL}/${userName}/events?per_page=${repositoriesQuantity}`);
    return await resp.json();
}

export { getEvents };