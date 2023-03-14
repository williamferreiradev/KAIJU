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

$(window).on('load', function() {
  var progressBar = $('.barr');
  var percent = $('.percent');
  var interval = setInterval(function() {
    var width = progressBar.width() + 10;
    if (width >= 100) {
      clearInterval(interval);
      $('#loading').fadeOut(500);
    } else {
      progressBar.width(width + '%');
      percent.text(width + '%');
    }
  }, 400);
});
