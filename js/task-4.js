"use strict";

let counterValue = document.querySelector('#value');

class Counter {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this); // (*)
  }

  decrement() {
    counterValue.textContent -= 1;
  }

  increment() {
    counterValue.textContent = +counterValue.textContent + 1;
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  };
}

new Counter(counter);