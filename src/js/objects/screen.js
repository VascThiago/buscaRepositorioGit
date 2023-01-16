const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        //USUARIO
        this.userProfile.innerHTML = `  <div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto de perfil" />
                                            <div class="data">
                                                <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                                <p>${user.bio ?? 'Não possui Bio cadastrada 😥'}</p>
                                                <p>Seguindo: ${user.seguindo} | Seguidores: ${user.seguidores}</p>
                                            </div>
                                        </div>`;

        //REPOSITÓRIOS
        let reposItens = '';
        user.repositories.forEach(repo => reposItens += 
            `<li>
                <a href="${repo.html_url}" target="_blank">
                    <p>${repo.name}</p>
                    <span>🍴 ${repo.forks}</span> 
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span>👀 ${repo.watchers_count}</span>
                    <span>👨‍💻 ${repo.language ?? 'linguagem não definida'}</span>
                </a>
             </li>`);

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += ` <div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${reposItens}</ul>
                                            </div>`
        }

        //EVENTOS
        let validTypesEvents = user.events.filter((item) => {
            return item.type === 'PushEvent' || item.type === 'CreateEvent'
        });
        let eventItens = '';

        validTypesEvents.forEach(e => {
            if(e.payload.commits) {
                let commits = e.payload.commits[0].message;

                eventItens += `<li><p><span>${e.repo.name}</span> -${commits}</p></li>`
            } else {
                eventItens += `<li><p><span>${e.repo.name}</span></p></li>`
            }
        });

        if(user.events.length > 0) {
            this.userProfile.innerHTML += ` <div class="repositories">
                                                <h2>Eventos</h2>
                                                <ul class="events"> ${eventItens} </ul>
                                            </div>`
        }
        
    },
    //NOT FOUND
    renderNotFound() {
        this.userProfile.innerHTML = "<h2>Usuário não encontrado!</h2>";
    }
};

export { screen };