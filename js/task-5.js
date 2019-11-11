"use strict";

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output')

input.addEventListener('input', spanInputChange);

function spanInputChange(event) {
    output.textContent = event.currentTarget.value;
}

input.addEventListener('input', event => {
  if(!event.currentTarget.value){
    output.textContent = 'незнакомец'
  }
})
