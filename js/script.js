// Change color to navbar on sroll
  $(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
  })