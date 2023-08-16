const searchButton = document.querySelector('.js-search-button');
const searchInput = document.querySelector('.js-search-input');
const menuOpen = document.querySelector('.js-menu-open');
const menuClose = document.querySelector('.js-menu-close');
const nav = document.querySelector('.js-nav');
const navLinks = document.querySelectorAll('.js-nav ul li a');

let isSearchOpen = false;
let isMenuOpen = false;

searchButton.addEventListener('click', () => {
  if (isSearchOpen === false) {
    searchInput.classList.remove('w-0');
    searchInput.classList.add('w-40');
    isSearchOpen = true;
  } else {
    searchInput.classList.add('w-0');
    searchInput.classList.remove('w-40');
    isSearchOpen = false;
  }
});

function closeMenu() {
  menuOpen.src = 'img/icon-menu.svg';
  nav.classList.remove('top-0');
  nav.classList.add('-top-full');
  isMenuOpen = false;
}

menuOpen.addEventListener('click', () => {
  if (isMenuOpen === false) {
    menuOpen.src = 'img/icon-close.svg';
    nav.classList.remove('-top-full');
    nav.classList.add('top-0');
    isMenuOpen = true;
  } else {
    closeMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});
