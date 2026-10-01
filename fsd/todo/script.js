const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoListUL = document.getElementById('todo-list');

let allTodos = getTodos();
updateTodoList();

todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    addTodo();
});

function addTodo() {
    const todotext = todoInput.value.trim();
    if (todotext.length > 0) {
        const todoobject = {
            text: todotext,
            completed: false
        };
        allTodos.push(todoobject);
        updateTodoList();
        saveTodos();
        todoInput.value = "";
    }
}

function updateTodoList() {
    todoListUL.innerHTML = "";
    allTodos.forEach((todo, todoindex) => {
        const todoItem = createTodoItem(todo, todoindex);
        todoListUL.append(todoItem);
    });
}

function createTodoItem(todo, todoindex) {
    const todoId = "todo-" + todoindex;
    const todoLi = document.createElement("li");
    const todotext = todo.text;
    todoLi.className = "todo";
    todoLi.innerHTML = `
        <input type="checkbox" id="${todoId}">
        <label class="custom-checkbox" for="${todoId}">
            <img src="./icons/check_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"/>
        </label>
        <label for="${todoId}" class="todo-text">
            ${todotext}
        </label>
        <button class="delete-button">
            <img src="./icons/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"/>
        </button>
    `;

    const deletebutton = todoLi.querySelector(".delete-button");
    deletebutton.addEventListener("click", () => {
        deleteTodoitem(todoindex);
    });

    const checkbox = todoLi.querySelector("input[type='checkbox']");
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
        allTodos[todoindex].completed = checkbox.checked;
        saveTodos();
    });

    return todoLi;
}

function deleteTodoitem(todoindex) {
    allTodos = allTodos.filter((_, t) => t !== todoindex);
    saveTodos();
    updateTodoList();
}

function saveTodos() {
    const todojson = JSON.stringify(allTodos);
    localStorage.setItem("todos", todojson);
}

function getTodos() {
    const todos = localStorage.getItem("todos") || "[]";
    return JSON.parse(todos);
}
