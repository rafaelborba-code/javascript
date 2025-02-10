function adicionarTarefa(){
    // atribuindo uma mensagem à variavel mensagem
    let mensagem = "Tarefa adicionada com sucesso!" 

    //mostrando a mensagem que foi atribuida à variável mensagem num parágrafo vazio no html
    document.getElementById("mensagem").textContent = mensagem 

    // atribui à variável inputTarefa o elemento html com id tarefa
    let inputTarefa = document.getElementById("tarefa")

    // atribui à variável tarefa o valor do inputTarefa
    let tarefa = inputTarefa.value

    // identifica a lista ul no html e atribui ela à variável listaTarefas
    let listaTarefas = document.getElementById("listaTarefas")

    // cria um li 
    let novaTarefa = document.createElement("li")

    // adiciona o li à lista de tarefas
    listaTarefas.appendChild(novaTarefa)

    // mostra a tarefa na li da lista de tarefas
    novaTarefa.textContent = tarefa

    // deixa o input vazio
    inputTarefa.value = ""
}