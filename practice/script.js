const title = document.getElementById('title');
const paragraph = document.querySelector('.text');
const button = document.getElementById('btn');
const paragraph2 = document.getElementsByClassName('paragraph2');


title.textContent = "Changed with JS!";
paragraph.innerHTML = "This <strong>is bold</strong> now";
paragraph2[0].innerHTML = 'I am a changed Paragraph';


title.style.color = 'yellow';
paragraph.style.backgroundColor = 'lightblue';

button.addEventListener('click', function(){
  paragraph2[0].innerHTML = '<strong>I am a bold Paragraph</strong>';
  paragraph2[0].style.color = 'white';
  paragraph2[0].style.backgroundColor = 'black';
})