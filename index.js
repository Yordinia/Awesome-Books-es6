/* eslint-disable no-unused-vars */

import Date from './modules/date.js';
import Books from './modules/UI.js';

Date();

const button = document.querySelector('.Button');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const booksList = document.querySelector('.books');
const listNav = document.querySelector('.listNav');
const addNav = document.querySelector('.addNav');
const contactNav = document.querySelector('.contactNav');
const listSec = document.querySelector('.for-list');
const addSec = document.querySelector('.for-add');
const contactSec = document.querySelector('.for-contact');

const tbody = document.createElement('tbody');
booksList.appendChild(tbody);


listSec.style.display = 'block';
addSec.style.display = 'none';
contactSec.style.display = 'none';

listNav.addEventListener('click', () => {
  listSec.style.display = 'block';
  addSec.style.display = 'none';
  contactSec.style.display = 'none';
  listNav.classList.add('nav-links');
  addNav.classList.remove('nav-links');
  contactNav.classList.remove('nav-links');
});
addNav.addEventListener('click', () => {
  addSec.style.display = 'block';
  listSec.style.display = 'none';
  contactSec.style.display = 'none';
  listNav.classList.remove('nav-links');
  addNav.classList.add('nav-links');
  contactNav.classList.remove('nav-links');
  title.focus();
});
contactNav.addEventListener('click', () => {
  contactSec.style.display = 'block';
  listSec.style.display = 'none';
  addSec.style.display = 'none';
  listNav.classList.remove('nav-links');
  addNav.classList.remove('nav-links');
  contactNav.classList.add('nav-links');
});

Books.display();
button.addEventListener('click', Books.addBook);
