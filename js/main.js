var swiper = new Swiper(".cardSlider", {
    slidesPerView: 2,
    spaceBetween: 68,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
   
      768: {
        slidesPerView: 2,
        spaceBetween: 68,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 1,
      },
     
    },
  });


  
  $('.menu-toggle').click(function(){
     $(".main_nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });
  

