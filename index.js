const hamburger = document.querySelector('.hamburger');
const list = document.querySelector('.list');
const links = document.querySelectorAll('.list li a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  list.classList.toggle('active');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    list.classList.remove('active');
  });
});