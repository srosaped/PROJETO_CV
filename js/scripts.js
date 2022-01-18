$(document).ready(function () {

/* Hamburguer Menu Animation */
    $('.hamburguer').on('click', function () {
  
      $('.animated-icon').toggleClass('open');
    });

/* Smooth Scroll  */
    $("a").on('click', function(event) {

      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });

  });

  const scrollto = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
    
