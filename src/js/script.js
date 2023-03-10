import { getUser } from "./services/user.js";
import { getRepos } from "./services/repositories.js";
import { getEvents } from "./services/events.js";

import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value;

    if(validateInput(userName)) return;
    getUserData(userName);
});

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isEnterKeyPressed = key === 13;

    if(isEnterKeyPressed) {
        if(validateInput(userName)) return;  
        getUserData(userName);
    }
});

function validateInput(userName) {
    if(userName.length === 0) {
        alert('Preencha o campo com o nome do usuário do GitHub');
        return true
    }
}

async function getUserData(userName) {

    const userResponse = await getUser(userName);
    const reposResponse = await getRepos(userName);
    const reposEvents = await getEvents(userName);

    if(userResponse.message === "Not Found") {
        screen.renderNotFound();
        return
    }
    
    user.setInfo(userResponse);
    user.setRepositories(reposResponse);
    user.setEvents(reposEvents);
    
    screen.renderUser(user);
}