// Hamburger menu açıb-bağlamaq üçün
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

console.log("salam")

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
  