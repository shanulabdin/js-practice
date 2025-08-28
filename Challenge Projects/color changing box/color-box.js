const box = document.getElementById("box");
const colorBtn = document.getElementById("color-btn");

colorBtn.addEventListener('click', () => {
  // const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  // const randomColor = '#000000ff';
  
  // const randomR = Math.floor(Math.random() * 100) + 156;
  // const randomG = Math.floor(Math.random() * 100) + 156;
  // const randomB = Math.floor(Math.random() * 100) + 156;
  
  // const randomRGB = `rgb(${randomR}, ${randomG}, ${randomB})`;

  // const randomHue = Math.floor(Math.random() * 361);
  // const saturatedColor = `hsla(${randomHue}, 100%, 50%, 1.00)`

  const colors = ['violet', 'indigo',  'blue', 'green', 'yellow', 'orange', 'red'];
  const randomIndex = Math.floor(Math.random() * colors.length)
  const randomColor = colors[randomIndex];
  box.style.background = randomColor;
})
