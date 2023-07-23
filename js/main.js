const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', ()=> {
  menuMobile.classList.toggle('menu--open');
});

const swiperOne = new Swiper('.feedback__slider', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiperTwo = new Swiper('.certificates__slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

const accordeon = document.querySelector('.accordeon');
const accordeonTitles = document.querySelectorAll('.accordeon__title');

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
  accordeonTitle.addEventListener('click', function() {

    const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');

    accordeonTitle.classList.toggle('accordeon__title--active');
    currentText.classList.toggle('accordeon__text--visible');

    if (currentText.classList.contains('accordeon__text--visible')) {
      currentText.style.maxHeight = currentText.scrollHeight + 'px'
    } else {
      currentText.style.maxHeight = null
    }

  });
});

// ('a[href^="#"').on('click', function() {

//   let href = $(this).attr('href');

//   $('html, body').animate({
//       scrollTop: $(href).offset().top
//   });
//   return false;
// });


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


// document.querySelectorAll('a[href^="#"').forEach(link => {

//   link.addEventListener('click', function(e) {
//       e.preventDefault();

//       let href = this.getAttribute('href').substring(1);

//       const scrollTarget = document.getElementById(href);

//       const topOffset = document.querySelector('.scrollto').offsetHeight;
//       // const topOffset = 0; // если не нужен отступ сверху 
//       const elementPosition = scrollTarget.getBoundingClientRect().top;
//       const offsetPosition = elementPosition - topOffset;

//       window.scrollBy({
//           top: 0,
//           behavior: 'smooth'
//       });
//   });
// });