function toggleButton(selector) {
  const buttonElement = document.querySelector(selector);
  if (!buttonElement.classList.contains('is-toggled')){
    previousButton ()
    buttonElement.classList.add('is-toggled');
  } else {
    buttonElement.classList.remove('is-toggled');
  }
}

function previousButton (){
  const preButton = document.querySelector('.is-toggled');
  if (preButton){
    preButton.classList.remove('is-toggled');
  }
}