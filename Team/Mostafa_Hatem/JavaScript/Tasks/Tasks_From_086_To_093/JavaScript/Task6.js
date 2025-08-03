// This is All Hava A Class Input

let input = document.querySelectorAll(".input");
for (let i = 0; i < 3; i++) {
  input[i].style.display = "flex";
  input[i].style.margin = "15px auto";
  input[i].style.width = "300px";
  input[i].style.padding = "10px";
}

let select = document.querySelector("select");
select.style.width = "325px";

let submit = document.querySelector('[type="submit"]');
submit.style.display = "flex";
submit.style.margin = "15px auto";
submit.style.width = "325px";
submit.style.padding = "10px";
submit.style.border = "none";
submit.style.borderRadius = "5px";
submit.style.backgroundColor = "#009688";
submit.style.color = "white";
submit.style.cursor = "pointer";
submit.style.fontSize = "17px";

// End Style

let father = document.createElement("div");
father.style.display = "grid";
father.style.gridTemplateColumns = "repeat(auto-fill, minmax(400px, 1fr))";
father.style.gap = "10px";
father.style.margin = "10px auto";

document.body.appendChild(father);

// form.documentChild("result");

submit.addEventListener("click", function (e) {
  e.preventDefault();

  let number = input[0].value;
  let text = input[1].value;
  let elementType = select.value;
  father.innerHTML = "";
  for (let i = 0; i < number; i++) {
    if (elementType == "Div") {
      child = document.createElement("div");
    } else if (elementType == "Section") {
      child = document.createElement("section");
    }

    child.style.backgroundColor = "#ff5722";
    child.className = "child";
    child.style.width = "290px";
    child.style.margin = "10px auto";
    child.style.padding = "15px 20px";
    child.style.textAlign = "center";
    child.style.color = "white";
    child.style.borderRadius = "5px";
    child.textContent = text;
    child.style.fontSize = "17px";

    father.appendChild(child);
  }
});
