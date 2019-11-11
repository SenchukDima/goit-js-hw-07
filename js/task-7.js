"use strict";

let input = document.getElementById("font-size-control");
let span = document.getElementById("text");

input.addEventListener("input", function() {
  span.style.fontSize = input.value + "px";
});
