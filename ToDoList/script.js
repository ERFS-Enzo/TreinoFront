const input = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
    const taskText = input.value; //pega o que foi digitado no input
    if(taskText.trim() !== ""){
        const newItem = document.createElement('li'); 
        newItem.textContent = taskText; 
        const rmvButton = document.createElement('button'); //cria um botão para remover a tarefa
        rmvButton.textContent = "Remover";

        rmvButton.style.height = "25px";
        rmvButton.classList.add('buttons');

        newItem.appendChild(rmvButton); //adiciona o botão de rmv no <li>
        taskList.appendChild(newItem); //adiciona o <li> dentro do <ul>

        rmvButton.addEventListener('click', () => {
            taskList.remove(); //remove o <li> do <ul>
        });

        input.value = ""; //limpa o input
        input.focus(); //volta foco para o input
    }
});