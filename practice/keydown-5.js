// Form handling:
// const form = document.getElementById('login-form');
// const username = document.getElementById('username');
// const msg = document.getElementById('msg');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   event.preventDefault();
//   msg.textContent = 'Submitted username: ' + username.value;
// })


// Input events
// const input = document.getElementById('live');
// const output = document.getElementById('output');

// input.addEventListener('input', () => {
//   output.textContent = input.value;
  
// })

// input.addEventListener('keydown', (event) => {
//   if(event.keyCode === 13) {
//     console.log(input.value);
//   }
// })



// Mini Exercises

// 1
// const log = document.getElementById('log');
// document.addEventListener('keydown', (event) => {
  
//   console.log(log.textContent = event.key);
// })

// document.addEventListener('keydown', (event) => {
//   const text = document.getElementById('log').textContent = event.key
//   console.log(text)
// })


// 2
// const input = document.getElementById('input');
// const output = document.getElementById('output');
// let count = 0;

// input.addEventListener('keydown', (event) => {
//   count = input.value.length
//   output.textContent = count;

// // 3
//   if(event.key === 13){
//     event.preventDefault();
//   }
// })


// // 4
// const input = document.getElementById('input');
// const list = document.getElementById('list')


// const todoList = () => {
//     const task = document.createElement('li');
//     task.textContent = input.value
//     input.value = '';
    
//     list.appendChild(task);
// }

// input.addEventListener('keydown', (event) => {
//   if(event.keyCode === 13){
//     todoList()
//   }
// })