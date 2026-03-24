const fetchButton = document.getElementById('button-fetch');
const resetButton = document.getElementById('button-reset');

fetchButton.addEventListener('click', function(event) {
    event.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) 
        .then(users => {
            const usersContainer = document.getElementById('users');
            usersContainer.innerHTML = '';
            users.forEach(user => {
                const userElement = document.createElement('div');
                userElement.classList.add('user'); 
                userElement.innerHTML = `
                    <h2>${user.name}</h2>
                    <p>Email: ${user.email}</p>
                    <p>Telefone: ${user.phone}</p>
                    <p>Website: ${user.website}</p>
                    <p>Empresa: ${user.company.name}</p>
                    <p>Endereço: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <hr>
                `;
                usersContainer.appendChild(userElement);
            });
        })
        .catch(() => {
            usersContainer.innerHTML = 'Erro ao carregar usuários';
        });
});

resetButton.addEventListener('click', function(event) {
    event.preventDefault();
    const usersContainer = document.getElementById('users');
    usersContainer.innerHTML = '<p>Clique em buscar...</p>';
});