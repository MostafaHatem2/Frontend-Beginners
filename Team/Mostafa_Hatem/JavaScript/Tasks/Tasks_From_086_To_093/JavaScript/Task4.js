let one = document.querySelector(".one");
let two = document.querySelector(".two");

let tempTitle = one.title;
let tempText = one.textContent;

one.title = two.title;
one.textContent = two.textContent;

two.title = tempTitle;

let length = one.className.length - 1;

two.textContent = tempText + " " + length;
