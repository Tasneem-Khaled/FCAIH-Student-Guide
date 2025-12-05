let navbar = document.querySelector(".navbar");
let toggler = document.querySelector(".navbar-toggler");

// --------navbar--------
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll < 0) {
    return;
  } else if (currentScroll > lastScroll) {
    navbar.classList.add("nav-anim");
  } else {
    navbar.classList.remove("nav-anim");
  }

  lastScroll = currentScroll;
});
// ----------------------