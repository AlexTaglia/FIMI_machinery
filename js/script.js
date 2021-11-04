// Change color to navbar on sroll

var navbar = document.querySelector('nav');
var language = document.getElementsByClassName('language')[0];

window.onscroll = function() {

  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('navbar-dark');
    navbar.classList.add('navbar-light');
    language.classList.add('language-dark');


  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.remove('navbar-light');
    navbar.classList.add('navbar-dark');
    language.classList.remove('language-dark');

  }
}


