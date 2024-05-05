const navMenu = document.getElementById('Navbar-menu'),
  navToggle = document.getElementById('nav-toggle');

/*========== Show Menu =========*/
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  });
}
