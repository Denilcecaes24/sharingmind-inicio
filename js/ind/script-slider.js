var swiper3 = new Swiper(".mySwiper3", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      clickable: false,
    },

  });