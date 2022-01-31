'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window


const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



//Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log('height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //Scrolling 
  //window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset); 
  //window.scrollTo({
  //left: s1coords.left + window.pageXOffset,
  //top: s1coords.top + window.pageYOffset,
  //behavior: 'smooth'
  //}); 
  section1.scrollIntoView({ behavior: 'smooth' })
});
/* 
//Event Deligation 
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  })
})
*/
// 1. Add event listener to common parent element 
// 2. Determine what element originated the event 

document.querySelector('.nav__list').addEventListener('click', function (e) {
  console.log(e.target);

  //Matching strategy 
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }
});

/////////////////////////////////////////// 
/*
console.log(document.documentElement);
console.log(document.head);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements 
//.insertAdjacentHTML 

const message = document.createElement('div')
message.classList.add('cookie-message');
//message.textContent = "We use cookies to ensure that we give you the best experience on our website.";
message.innerHTML = 'We use cookies to ensure that we give you the best experience on our website. <button class="btn btn--close-cookie">Got it!</button>';
//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true));
//header.before(message);
//header.after(message); 

//Deleting elements 
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  //message.remove(); 
  message.parentElement.removeChild(message);
});

//Styles 
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangeread');

//Attributes 
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful logo';

//Non-standard 
console.log(logo.designer)
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist')

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data attributes 
console.log(logo.CDATA_SECTION_NODE.versionNumber);

// Classes 
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not inludes 

//Dont use 
logo.className = 'jonas';
 
//
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log('height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //Scrolling 
  //window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset); 
  //window.scrollTo({
  //left: s1coords.left + window.pageXOffset,
  //top: s1coords.top + window.pageYOffset,
  //behavior: 'smooth'
  //}); 
  section1.scrollIntoView({ behavior: 'smooth' })
});

//Event and Event handler 
const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function (e) {
  alert('addEventListener: Great you are reading the heading :D');
});

const alertH1 = function (e) {
  alert('onmouseenter: Great you are reading the heading :D');
  h1.removeEventListener('mouseenter', alertH1);
};
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); 
*/
//Event Propagation in practice 
//rgb(225,225,225) 
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomColor = () => {
  `rgb(${randomInt(0, 225)},${randomInt(0, 225)},${randomInt(0, 225)})`;
}
console.log(randomColor(0, 225));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  //Stop propagation 
  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget)
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget)
});