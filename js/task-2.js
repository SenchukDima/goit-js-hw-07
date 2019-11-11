"use strict";



const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createLi = (text) => {
  const li = document.createElement('li');
  li.textContent = text;

  return li;
}

ingredients.forEach(item => {
  document.querySelector('ul#ingredients').appendChild(createLi(item));
})