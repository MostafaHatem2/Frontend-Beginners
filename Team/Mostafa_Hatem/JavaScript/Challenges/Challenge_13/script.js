let btn = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

function createTaskElement(inputValue) {
  let element = document.createElement("div");
  element.textContent = inputValue;
  tasks.appendChild(element);

  element.style.padding = "10px";
  element.style.display = "flex";
  element.style.justifyContent = "space-between";
  element.style.backgroundColor = "#fff";
  element.style.borderRadius = "10px";
  element.style.margin = "10px 0";
  element.style.alignItems = "center";

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  element.appendChild(deleteBtn);

  deleteBtn.style.borderColor = "transparent";
  deleteBtn.style.backgroundColor = "red";
  deleteBtn.style.width = "fit-content";
  deleteBtn.style.padding = "5px";
  deleteBtn.style.borderRadius = "10px";
  deleteBtn.style.color = "#fff";

  deleteBtn.onclick = function () {
    element.remove();
    window.localStorage.removeItem(inputValue);
  };
}

btn.onclick = function () {
  let inputValue = document.querySelector(".input").value;
  if (inputValue.trim() === "") return;

  window.localStorage.setItem(inputValue, inputValue);
  createTaskElement(inputValue);
  document.querySelector(".input").value = "";
};

window.onload = function () {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    createTaskElement(key);
  }
};
