const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

addBtn.addEventListener('click', function() {
  const li = document.createElement('li');
  li.textContent = input.value;

  list.appendChild(li);
  input.value = '';

  const deleteButton = () => {
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Delete';
    list.appendChild(removeBtn);
    
    removeBtn.addEventListener('click', () => {
      li.remove();
      removeBtn.remove();
    })
  }

  deleteButton();
})