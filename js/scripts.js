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
          width: "75%"
        }, 250);
        $(".prog2").animate({
          width: "70%"
        }, 250);
        $(".prog3").animate({
          width: "50%"
        }, 250);
        $(".prog4").animate({
          width: "70%"
        }, 250);
        $(".prog5").animate({
          width: "40%"
        }, 250);
        $(".prog6").animate({
          width: "45%"
        }, 250);
        $(".prog7").animate({
          width: "30%"
        }, 250);
        $(".prog8").animate({
          width: "20%"
        }, 250);
    });
    
    $("#skills").mouseout(function() {
      $(".prog1",).stop();/* Stop Animation Loop */
      $(".prog2").stop();
      $(".prog3").stop();
      $(".prog4").stop();
      $(".prog5").stop();
      $(".prog6").stop();
      $(".prog7").stop();
      $(".prog8").stop();
    });

  });

  /* Scroll to Top  Footer Button */
  const scrollto = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
