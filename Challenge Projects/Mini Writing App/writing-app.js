// login page
const form = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const login = document.getElementById('login');
const loginPage = document.getElementById('login-page');

// writing page
const writingPage = document.getElementById('writing-page');
const textArea = document.getElementById('text-area');

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
    isLogged = false;
  }  

});

