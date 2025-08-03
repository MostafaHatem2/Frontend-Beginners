let element = document.querySelector("p");
let div = document.querySelector("div");

element.remove();

let divBefore = document.createElement("div");
divBefore.className = "start";
divBefore.title = "Start Element";
divBefore.dataset.value = "Start";
divBefore.textContent = "Start";
div.before(divBefore);

let divAfter = document.createElement("div");
divAfter.className = "end";
divAfter.title = "End Element";
divAfter.dataset.value = "End";
divAfter.textContent = "End";
div.after(divAfter);
