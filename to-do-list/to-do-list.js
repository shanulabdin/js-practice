const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

addBtn.addEventListener('click', function() {
  const li = document.createElement('li');
  li.textContent = input.value;
  input.value = '';

  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'remove';
  
  list.appendChild(li);
  li.appendChild(removeBtn);

  removeBtn.addEventListener('click', () => {
    li.remove();
  })
});