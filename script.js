
// Pegamos o campo onde a pessoa digita a tarefa
const campoTarefa = document.querySelector('input');

// Pegamos o botão "Adicionar"
const botaoAdicionar = document.querySelector('button');

// Quando a pessoa clicar no botão
botaoAdicionar.addEventListener('click', function () {

    // Pegamos o texto que foi digitado
    const tarefa = campoTarefa.value;

    // Criamos um novo item da lista
    const itemTarefa = document.createElement('li');

    // Colocamos o texto da tarefa dentro do item
    itemTarefa.textContent = tarefa;

    // Colocamos a tarefa dentro da lista
    document.querySelector('#taskList').appendChild(itemTarefa);

});

