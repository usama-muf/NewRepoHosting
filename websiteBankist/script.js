'use strict';

///////////////////////////////////////
// Modal window
const nav = document.querySelector('.nav');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const sliderBtnRight = document.querySelector('.slider__btn--right');
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};



btnsOpenModal.forEach(btn => btn.addEventListener('click', function (event) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

document.querySelector('.nav__links').addEventListener('click', function (event) {
  event.preventDefault();
  if (event.target.classList.contains('nav__link')) {
    const id = event.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behaviour: 'smooth'
    });

  }
});


////////////////////////////////
//Operations tab///
///////////////////////////////

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (event) {
  const clicked = event.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');


  tabContent.forEach(content => content.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');

  //tabContent.forEach(content => content.classList.add(`operations__content--${btnNo}`));
  //tabContent.classList.add(`operations__content--${btnNo}`);



});

///////////////////////////////////////////////////////////////////
// header fade out animation 
///////////////////////////////////////////////////////////////////
const handleHoverNav = function (event) { //, opacity) {
  if (event.target.classList.contains('nav__link')) {
    const siblings = event.target.closest('.nav').querySelectorAll('.nav__link');
    const logo = event.target.closest('.nav').querySelector('img');


    siblings.forEach(ele => {
      if (ele !== event.target) ele.style.opacity = this; //opacity;

    });
    logo.style.opacity = this; // opacity;


  }
}


nav.addEventListener('mouseover', handleHoverNav.bind(.5) //function (event) {
  //handleHoverNav(event, .5);}
);

nav.addEventListener('mouseout', handleHoverNav.bind(1) // function (event) {
  //handleHoverNav(event, 1);}
);

////////////////////////////////////////////////////////////
// Sticky Navbar    i)
///////////////////////////////////////////////////////////
//This method is outdated and memory intensive
const section1 = document.querySelector('#section--1');
const coordinates = section1.getBoundingClientRect();

window.addEventListener('scroll', function () {
  if (window.scrollY > coordinates.top)
    nav.classList.add('sticky');
});


/////////////////////////////////////////////////
//sticky Navbar   ii)
/////////////////////////////////////


/////////////////////////////////////////////////////
//Event Delegation: When button is clicked the link wont change 
//and the content is directed to that secton






/*
      sliderBtnRight.addEventListener('click', function (event) {
        event.preventDefault();

        document.querySelector('.slide--1').classList.toggle('testimonial--active');
        //document.querySelector('.slide--2').classList.toggle('testimonial--active');
        document.querySelector('.slide--3').classList.toggle('testimonial--active');

      });
      const allSlide = document.querySelectorAll('.slide');
      allSlide.forEach(slide => sliderBtnRight.addEventListener('click',function(){
        slide.classList.toggle('testimonial--active')}));
*/