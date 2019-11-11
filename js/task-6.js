"use strict";

const input = document.querySelector('#validation-input');


input.addEventListener('blur', event => {
  if (event.currentTarget.value.length === +input.getAttribute('data-length')) {
    input.className = 'valid';
  } else {
    input.className = 'invalid';
  }
})
