let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {

  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}

function resetTodoList(){
  todoList = [];
  localStorage.removeItem('todoList');
  renderTodoList()
}