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

     /* Skills Animation */
    $("#skills").mouseover(function() {
    $(".prog1").animate({
      width: "70%"
    }, 2500);
    });

    $("#skills").mouseout(function() {
    $(".prog1").stop();
    });

  });


 

  /* Smoth Scroll to all browsers */
  const scrollto = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
    
