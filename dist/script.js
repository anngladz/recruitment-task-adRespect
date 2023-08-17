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

const slider = document.querySelector('.js-slider');
const slides = [
  {
    id: 1,
    title: 'Nowoczesna aranżacja Twojego ogrodu',
    text: 'Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.',
    image: 'img/slide-01.jpg',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.',
    image: 'img/slide-02.jpg',
  },
  {
    id: 3,
    title: 'Cras auctor augue sit amet mi pharetra ornare',
    text: 'Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.',
    image: 'img/slide-03.jpg',
  },
];

slider.innerHTML = slides
  .map(
    (slide) => `
    <div id="slide${slide.id}" class="carousel-item relative w-full">
    <div class="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:w-3/4 lg:m-auto">

      <div class="order-2 px-10 md:px-18 lg:px-0">
        <h1 class="text-4xl font-montserrat font-medium md:text-6xl lg:pr-48">${
          slide.title
        }</h1>
        <p class="font-inter text-base mt-6 mb-9 md:mt-11 md:mb-18 lg:pr-48">${
          slide.text
        }</p>
        <button class="font-inter bg-green text-light-grey px-5 py-3 rounded-3xl mr-9 mb-4">Skontaktuj się z nami</button>
        <button class="group font-inter border border-green text-green px-5 py-3 rounded-3xl hover:bg-green hover:text-light-grey duration-500">
          <span class="flex items-center">Zobacz nasze realizacje
            <svg class="ml-4 fill-green group-hover:fill-light-grey group-hover:animate-bounce" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8.49529L15.1043 7.59959L8.63642 14.0769L8.63642 0.5L7.36358 0.5L7.36358 14.0675L0.895699 7.59959L9.54553e-08 8.49529L8.00471 16.5L16 8.49529Z"/>
            </svg>
          </span>
        </button>
      </div>

      <div class="order-1 h-80 md:h-108 lg:absolute lg:top-0 lg:right-0 lg:pl-8 lg:w-1/2 lg:h-screen">
        <img class="w-full h-full object-cover" src="${
          slide.image
        }" alt="Photo" />
      </div>
      
    </div>

    <div class="flex absolute top-80 md:top-108 -translate-y-full right-0 lg:h-auto lg:top-auto lg:bottom-0 lg:-translate-y-0">
      <a href="#slide${
        slide.id === 1 ? slides.length : slide.id - 1
      }" class="md:py-6 md:px-8 bg-light-grey hover:bg-beige duration-500 "><img src="img/icon-arrow.svg" class="rotate-180" alt="Arrow" /></a> 
      <a href="#slide${
        slide.id === slides.length ? 1 : slide.id + 1
      }" class="md:py-6 md:px-8 bg-light-grey hover:bg-beige duration-500 "><img src="img/icon-arrow.svg" alt="Arrow" /></a> 
    </div>
  </div> `
  )
  .join('');
