import { baseURL } from "../variables.js";

async function getUser(userName) {
    const resp = await fetch(`${baseURL}/${userName}`);
    return await resp.json();
}

export { getUser };