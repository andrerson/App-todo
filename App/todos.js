var listElement     = document.querySelector("#app ul"); 
var inputElement    = document.querySelector("#app input");
var buttonElement   = document.querySelector("#app button"); 

todos = JSON.parse(localStorage.getItem('todo_list')) || [];

function renderTodo() {

    listElement.innerHTML = '';

    for(todo of todos) {
        console.log(todo);

        var todoElement = document.createElement('li');
        var todoTextElement = document.createTextNode(todo);

        var linkTodo = document.createElement('a');
        var linkTextTodo = document.createTextNode(' Excluir');

        var pos = todos.indexOf(todo);

        linkTodo.setAttribute('href', '#');
        linkTodo.setAttribute('onclick', 'deleteTodo('+pos+')');

        linkTodo.appendChild(linkTextTodo);

        todoElement.appendChild(todoTextElement);
        todoElement.appendChild(linkTodo);
        listElement.appendChild(todoElement);

    }
}

renderTodo();

function addTodo() {
    var todoTextInputElement = inputElement.value;
    todos.push(todoTextInputElement);
    inputElement.value = '';
    renderTodo();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodo();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('todo_list', JSON.stringify(todos));
}