document.querySelectorAll('.banner.swiper').forEach((banner) => {
  new Swiper(banner, {
    loop: true,
    speed: 700,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: banner.querySelector('.swiper-pagination'),
      clickable: true,
    },
    navigation: {
      nextEl: banner.querySelector('.swiper-button-next'),
      prevEl: banner.querySelector('.swiper-button-prev'),
    },
    keyboard: { enabled: true },
  });
});
