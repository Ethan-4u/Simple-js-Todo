const form = document.querySelector('#todo-form');
const todoList = document.querySelector('.collection');
const todoInput = document.querySelector('#todo');

loadEventListener();

function loadEventListener(){

  form.addEventListener('submit', addTodo);

  todoList.addEventListener('click', removeTodo);

}

function addTodo(e) {
  if(todoInput.value === '') {
    alert('add a todo');
  }

  const li = document.createElement('li');

  li.className = 'collection-item';

  li.appendChild(document.createTextNode(todoInput.value));

  const link = document.createElement('a');

  link.className = 'delete-item secondary-content';

  link.innerHTML = '<i class="fa fa-remove"></i>';

  li.appendChild(link);

  todoList.appendChild(li);

  todoInput.value = '';
  

  e.preventDefault();
}

function removeTodo(e) {
  if(e.target.parentElement.classList.contains
    ('delete-item')) {
      e.target.parentElement.parentElement.remove();
    }
}