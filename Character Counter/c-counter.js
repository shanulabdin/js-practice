const input = document.getElementById('input');
const counter = document.getElementById('counter');
const maxCount = 50;

input.addEventListener('input', () => {
  const length = input.value.length;
  counter.textContent = `Characters: ${length} / ${maxCount}`

  if(length > maxCount){
    counter.style.color = 'red';
    counter.textContent += ' ❌ Limit Exceeded'
  }
})