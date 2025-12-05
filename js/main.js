let navbar = document.querySelector(".navbar");
let toggler = document.querySelector(".navbar-toggler");

// -------navbar---------
window.addEventListener('scroll', function () {
  if (window.scrollY >= 150) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});
toggler.addEventListener('click', function () {
  if (window.scrollY > 150) return;
  navbar.classList.toggle('navbar-scrolled');
});

// ------header--------
var typed = new Typed("#element",
  {
    strings: ["Courses.", "Internships.", "Support.", "Guide Map.", "Links hub."],
    typeSpeed: 40,
    loop: true,
    loopCount: Infinity
  });
//-----------toast welcome,user-------------- 
document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem('currentUsername');

    if (username) {
        const toastElement = document.getElementById('welcomeToast');
        const toastMessage = document.getElementById('toastMessage');

        toastMessage.textContent = `Hello, ${username}`;

        const toast = new bootstrap.Toast(toastElement);
        toast.show();
    }
});
// --------------------