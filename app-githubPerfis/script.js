//Variáveis

const APIURL = "https://api.github.com/users/";
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Função para pegar o username

async function getUser(username) {
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();

    createUserCard(respData);

    getRepos(username);
}

// Função para pegar os repositórios do username pesquisado

async function getRepos(username) {
    const resp = await fetch(APIURL + username + '/repos');
    const respData = await resp.json();

    addReposToCard(respData);
}

// Adicionando as informações no HTML e criando a div aonde iremos adicionar os repositórios

function createUserCard(user) {
    const cardHTML = `
        <div class="card">
            <div>
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul class="info">
                    <li>${user.followers}<strong>Seguidores</strong></li>
                    <li>${user.following}<strong>Seguindo</strong></li>
                    <li>${user.public_repos}<strong>Repositórios</strong></li>
                </ul>
                <h4>Repositórios:</h4>
                <div id="repos"></div>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
}

// Adicionando os repositórios a div criada na função anterior

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');

    repos.forEach(repo => {
        const repoEl = document.createElement('a');

        repoEl.classList.add('repo')

        repoEl.href = repo.html_url;
        repoEl.target = '_blank';
        repoEl.innerText = repo.name;

        reposEl.appendChild(repoEl);
    });
}

// Feature de pesquisa

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user);

        search.value = '';
    } 
});