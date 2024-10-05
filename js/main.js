const navTriggerBtn = document.querySelector("#nav_trigger_btn");
const navMenu = document.querySelector("#nav_menu");

// event listener
navTriggerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-is-open");
});

// swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// scroll reveal animation
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 3000,
  delay: 600,
});

// hero
sr.reveal(".hero__text", { origin: "top" });

// steps
sr.reveal(".steps__step__1", { distance: "100px", interval: 100 });
sr.reveal(".steps__step__2", { distance: "200px", interval: 100 });
sr.reveal(".steps__step__3", { distance: "300px", interval: 100 });

// about
sr.reveal(".about__text", { origin: "left" });

sr.reveal(".about__img", { origin: "right", delay: 800 });
