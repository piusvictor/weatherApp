
//Initiate the weather widgets carousel 

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,            
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        758: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: true,
          loop: false,
          margin: 20,
          //dots:false
        }
      }
    })



      
     
  });


 


