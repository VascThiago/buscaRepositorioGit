import { baseURL } from "../variables.js";

//Configurando a API para pegar os dados do usuário
async function getUser(userName) {
    const resp = await fetch(`${baseURL}/${userName}`);
    //console.log(resp.json()); Somente para verificar o nome das propriedades
    return await resp.json();
}

export { getUser };