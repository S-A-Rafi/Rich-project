new Swiper('.card-wraper', {
    loop: true,
    spaceBetween: 30,
  
    // pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 3
        },
        1024:{
            slidesPerView: 4
        },
    }
  });

//   second slide
$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, //2000ms = 2s;
    autoplayHoverPause: true,
  });