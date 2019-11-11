'use strict'

console.log(`В списке ${document.querySelectorAll('.item').length} категории.`);
    
const h2 = document.querySelectorAll('ul#categories > li.item > h2');

for (let element of h2) {   
    console.log(`Категория: ${element.innerHTML}`);
    
    console.log(`Количество эллементов: ${element.parentElement.querySelectorAll('li').length}`);
}
