const search = document.querySelector('#search');
const items = document.querySelectorAll('#items li');

search.addEventListener('input', () => {
  const text = search.value.toLowerCase();

  items.forEach(item => {
    const match = item.textContent.toLowerCase().includes(text);

    item.style.display = match ? 'block' : 'none';

  });
});


// see what the input is
// check if that input exists in each item
// style the element to show if true otherwise disappear