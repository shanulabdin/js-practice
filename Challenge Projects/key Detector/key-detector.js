const key = document.getElementById('key');
const body = document.body;

body.addEventListener('keydown', (event) => {
  let randomNum = Math.floor(Math.random() * 80);
  let colors = `hsl(0 0 ${randomNum}%)`

  key.textContent = event.key.toUpperCase();
  body.style.backgroundColor = colors;
});