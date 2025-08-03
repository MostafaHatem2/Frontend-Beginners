let body = document.body;
for (let i = 0; i < body.children.length - 1; i++) {
  body.children[i].style.cursor = "pointer";
  body.children[i].addEventListener("click", function () {
    console.log(`This is ${body.children[i].tagName.toLowerCase()}`);
  });
}
