$(document).ready(function(){
    // slick slider
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: true
      });

    //   waypoint sticky navbar
    $('.js--features').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    });
});