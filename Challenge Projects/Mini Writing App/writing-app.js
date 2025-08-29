// login page
const form = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const login = document.getElementById('login');
const loginPage = document.getElementById('login-page');

// writing page
const writingPage = document.getElementById('writing-page');
const textArea = document.getElementById('text-area');
const counter = document.getElementById('counter');
const warning = document.getElementById('warning');

writingPage.style.display = 'none';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if(username.value === 'shanu' && password.value === 'shanu123'){
    loginPage.style.display = 'none';
    writingPage.style.display = 'block';
  } else if (username.value === 'shanu' && password.value !== 'shanu123'){
    alert('Password is Incorrect');
  } else if (username.value !== 'shanu' && password.value === 'shanu123'){
    alert('Username is Incorrect');
  } else {
    alert('Password and Username are Incorrect');
  }  
  
});


textArea.addEventListener(('input', 'keydown'), (event) => {
  let wordCount = textArea.value.length;
  counter.textContent = `Counter ${wordCount} / 25.`

  if(wordCount > 25){
    counter.style.color = '#ac0000ff';
  } else {
    counter.style.color = 'black';
  }


  if (event.key === 'Enter' && wordCount > 25){
    alert(`Note can not be longer than 25 characters`)
  } else if (event.key === 'Enter' && wordCount < 1){
    alert(`Note can not be empty`);
  } else if(event.key === 'Enter'){
    createNote();
    event.preventDefault();
  } 
});


// note page
const notePage = document.getElementById('note-page');
const noteList = document.getElementById('note-list');
const saveButton = document.getElementById('save-button');
const search = document.getElementById('search');

loginPage.style.display = 'none';
writingPage.style.display = 'block';

saveButton.addEventListener('click', () => {
  createNote()
});

function createNote(){
  const li = document.createElement('li');
  li.textContent = textArea.value;
  textArea.value = '';
  
  noteList.appendChild(li);
}
;

search.addEventListener('input', () => {
  const searchText = search.value.toLowerCase();
  const notes = document.querySelectorAll('#note-list li');
  
  notes.forEach(note => {
    const match = note.textContent.toLowerCase().includes(searchText);
    note.style.display = match ? 'block' : 'none'
  });  
});


const body = document.body;
const displayText = document.getElementById('display-text');


body.addEventListener('keydown', (event) => {
  const displayKey = event.key;
  displayText.textContent = displayKey

  const randomNum = 30 + Math.floor(Math.random() * 40);
  const randomColor = `hsl(0 0 ${randomNum}%)`

  displayText.style.backgroundColor = randomColor;
})