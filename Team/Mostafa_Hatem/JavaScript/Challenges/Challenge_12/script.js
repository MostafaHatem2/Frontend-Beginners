// Creat And Styling Body

let body = document.body;
body.style.fontFamily = "Arial";
body.style.backgroundColor = "#eee";
body.style.margin = "0";
body.style.padding = "0";
body.style.textDecoration = "none";
body.style.listStyle = "none";
body.style.boxSizing = "border-box";

// Creat And Styling head

let head = document.createElement("div");
head.className = "head";
document.body.appendChild(head);
head.style.backgroundColor = "#fff";
head.style.padding = "10px";
head.style.display = "flex";
head.style.justifyContent = "space-between";

// Creat And Styling logo

let logo = document.createElement("div");
logo.className = "logo";
head.appendChild(logo);
logo.style.width = "100px";
logo.style.justifyContent = "center";
logo.style.alignItems = "center";
logo.style.display = "flex";
logo.style.textAlign = "center";

// Creat And Styling logoName

let logoName = document.createElement("span");
logoName.className = "logoName";
logo.appendChild(logoName);
logoName.textContent = "Elzero";
logoName.style.color = "#009688";
logoName.style.fontSize = "20px";
logoName.style.fontWeight = "bold";
logoName.style.textAlign = "center";

// Creat And Styling links

let links = document.createElement("div");
links.className = "links";
head.appendChild(links);
links.style.width = "350px";

// Creat And Styling linksUl

let linksUl = document.createElement("ul");
links.appendChild(linksUl);
linksUl.className = "linksUl";
linksUl.style.listStyle = "none";
linksUl.style.display = "flex";
linksUl.style.justifyContent = "space-evenly";

// Creat And Styling li

let home = document.createElement("li");
linksUl.appendChild(home);
home.className = "home";
home.textContent = "Home";

let about = document.createElement("li");
linksUl.appendChild(about);
about.className = "about";
about.textContent = "About";

let service = document.createElement("li");
linksUl.appendChild(service);
service.className = "service";
service.textContent = "Service";

let contact = document.createElement("li");
linksUl.appendChild(contact);
contact.className = "contact";
contact.textContent = "Contact";

// Start Container

container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
container.style.width = "97%";
container.style.margin = "20px auto";
container.style.backgroundColor = "#fff";
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(auto-fill, minmax(380px, 1fr))";
container.style.gap = "10px";
container.style.backgroundColor = "transparent";

// Start Box

for (let i = 0; i < 15; i++) {
  let box = document.createElement("div");
  box.className = "box";
  container.appendChild(box);
  box.style.backgroundColor = "#fff";
  box.style.boxShadow = "0 0 10px #ddd";
  box.style.textAlign = "center";
  box.style.height = "80px";
  box.style.display = "flex";
  box.style.flexDirection = "column";
  box.style.justifyContent = "center";
  box.style.alignItems = "center";

  // Start H1

  let headBox = document.createElement("h1");
  box.appendChild(headBox);
  headBox.className = `boxH1${i}`;
  headBox.textContent = `${i + 1}`;
  headBox.style.fontSize = "20px";
  headBox.style.fontWeight = "500";
  headBox.style.marginBottom = "5px";

  // Start Element

  let element = document.createElement("p");
  box.appendChild(element);
  element.className = `product${i}`;
  element.textContent = `Product`;
  element.style.fontSize = "12px";
  element.style.color = "#888";
  element.style.marginTop = "5px";
}

// Start Footer

let footer = document.createElement("footer");
body.appendChild(footer);
footer.className = "footer";
footer.textContent = `Copyright 2021`;
footer.style.width = "100%";
footer.style.height = "100%";
footer.style.backgroundColor = "#009688";
footer.style.color = "#fff";
footer.style.padding = "15px";
footer.style.textAlign = "center";
footer.style.marginBottom = "0";
