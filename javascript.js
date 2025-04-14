// Hamburger menu açıb-bağlamaq üçün
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("mainNav");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const swiper = new Swiper(".heroSwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperBlog = new Swiper(".blogSwiper", {
  loop: true,
  slidesPerView: 1,
  dots: false,
  stagePadding: 50,
  centerSlides: true,
  spaceBetween: 50,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 40,
      centerSlides: true,
      stagePadding: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperMehsullar = new Swiper(".mehsullarSwiper", {
  loop: true,
  slidesPerView: 1,
  dots: false,
  stagePadding: 50,
  centerSlides: true,
  spaceBetween: 50,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1480: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
