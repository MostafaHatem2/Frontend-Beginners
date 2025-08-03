// Start Container

let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
container.style.width = "50%";
container.style.margin = "50px auto";

// Start Inputs

let inputs = document.createElement("div");
inputs.className = "inputs";
container.appendChild(inputs);
inputs.style.display = "flex";
inputs.style.justifyContent = "space-between";

// Start InputAdd

let inputAdd = document.createElement("input");
inputAdd.className = "inputAdd";
inputAdd.placeholder = "Add Classes";
inputAdd.type = "text";
inputs.appendChild(inputAdd);
inputAdd.style.width = "45%";
inputAdd.style.padding = "10px";

inputAdd.addEventListener("blur", function () {
  let classesAdd = this.value
    .toLowerCase()
    .split(" ")
    .filter((ele) => ele.trim() != "");
  this.value = "";

  for (let i = 0; i < classesAdd.length; i++) {
    let span = document.createElement("span");
    span.className = classesAdd[i];
    span.textContent = classesAdd[i];
    span.style.width = "fit-content";
    span.style.display = "inline-block";
    span.style.margin = "5px";
    span.style.padding = "6px 10px 8px";
    span.style.backgroundColor = "#ff5722";
    span.style.color = "#fff";

    span.className = classesAdd[i];
    element.appendChild(span);
    element.classList.add(classesAdd[i]);
  }
});

// Start inputRemove

let inputRemove = document.createElement("input");
inputRemove.className = "inputRemove";
inputRemove.placeholder = "Remove Classes";
inputRemove.type = "text";
inputs.appendChild(inputRemove);
inputRemove.style.width = "45%";
inputRemove.style.padding = "10px";

inputRemove.addEventListener("blur", function () {
  let classesRemove = this.value
    .toLowerCase()
    .split(" ")
    .filter((ele) => ele.trim() != "");
  this.value = "";
  for (let i = 0; i < classesRemove.length; i++) {
    let spans = element.querySelectorAll("span");
    spans.forEach((span) => {
      if (span.textContent.toLowerCase() === classesRemove[i]) {
        span.remove();
      }
      element.classList.remove(classesRemove[i]);
    });
  }
});

// Start Title

let title = document.createElement("div");
title.className = "title";
container.appendChild(title);
title.textContent = "Current Element";
title.style.padding = "25px";
title.style.backgroundColor = "#eee";
title.style.margin = "10px auto";
title.style.textAlign = "center";
title.style.fontSize = "18px";

// Start Show Class Lists

let lists = document.createElement("div");
container.appendChild(lists);
lists.className = "lists";
lists.style.backgroundColor = "#eee";
lists.style.padding = "10px";
lists.style.height = "100%";

let p = document.createElement("p");
lists.appendChild(p);
p.className = "p";
p.textContent = "Current Elements Class Lists";
p.style.padding = "25px";
p.style.margin = "10px auto";
p.style.fontSize = "18px";
p.style.height = "100%";

let list = document.createElement("div");
lists.appendChild(list);
list.className = "list";
list.style.display = "flex";
list.style.flexWrap = "wrap";

let element = document.createElement("div");
list.appendChild(element);
element.className = "element";
element.style.width = "80%";
element.style.margin = "auto";
