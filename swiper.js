import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 1000,
  effect: 'slide',
  slidesPerView: 1,
  spaceBetween: 0,
});

const jpBtn = document.getElementById('lang-jp');
const enBtn = document.getElementById('lang-en');
const links = document.querySelectorAll('nav a');
const logo = document.querySelector('.logo');

jpBtn.addEventListener('click', () => {
  logo.textContent = 'くうてんもーげん';
  links[0].textContent = 'CIRCLE';
  links[1].textContent = 'PRODUCT';
  links[2].textContent = 'CONTACT';
  jpBtn.classList.add('active');
  enBtn.classList.remove('active');
});

enBtn.addEventListener('click', () => {
  logo.textContent = 'Kuutennmorgen';
  links[0].textContent = 'CIRCLE';
  links[1].textContent = 'PRODUCTS';
  links[2].textContent = 'CONTACT';
  enBtn.classList.add('active');
  jpBtn.classList.remove('active');
});
