const form = document.querySelector('#login-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if(username.value === 'shanu123' && password.value === '1111') {
    alert('Logged in')
  } else {
    alert('Incorrect username or Password');
  }
});