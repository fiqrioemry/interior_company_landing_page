const navTriggerBtn = document.querySelector("#nav_trigger_btn");
const navMenu = document.querySelector("#nav_menu");

// event listener
navTriggerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-is-open");
});
