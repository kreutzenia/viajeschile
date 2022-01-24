

new WOW().init();


$(window).scroll(function(){

    if ($(this).scrollTop() > 400) {
        $("#menu").removeClass("navbar");
       $('#menu').addClass("bg-interno");
      } else {
    
       $("#menu").removeClass("bg-interno");
       $('#menu').addClass("navbar");
      }

   });

   $('#blogCarousel').carousel({
    interval: 5000
});

function mialerta() {  
    alert("¡Hola..., Mensaje Enviado...!");
} 