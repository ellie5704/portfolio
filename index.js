const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

const navbarEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 750) {
    navbarEl.classList.add('navbar-scrolled');
  } else if (window.scrollY <= 750) {
    navbarEl.classList.remove('navbar-scrolled');
  }
})