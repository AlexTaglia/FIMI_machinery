// Change color to navbar on sroll

var navbar = document.querySelector('nav');
window.onscroll = function() {

  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('navbar-dark');
    navbar.classList.add('navbar-light');

  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.remove('navbar-light');
    navbar.classList.add('navbar-dark');
  }
}