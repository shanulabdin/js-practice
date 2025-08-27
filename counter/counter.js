let count = 0;
const display = document.getElementById('count');
const inc = document.getElementById('inc');
const dec = document.getElementById('dec');

inc.addEventListener('click', () => {
  count++;
  display.textContent = count;
});

dec.addEventListener('click', () => {
  count--;
  display.textContent = count;
});