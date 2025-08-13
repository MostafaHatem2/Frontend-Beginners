let table = document.querySelector("table");
let tbody = document.querySelector("tbody");
let td = document.querySelector("td");

fetch(
  // Github URL
  "https://api.github.com/users/ElzeroWebSchool/repos"
)
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((full) => {
    full.length = 15;
    for (let i = 0; i < full.length; i++) {
      let tr = document.createElement("tr");
      table.appendChild(tr);
      let name = document.createElement("td");
      tr.appendChild(name);
      name.innerHTML = full[i].name;
      let stars = document.createElement("td");
      tr.appendChild(stars);
      stars.innerHTML = full[i].stars;
      let url = document.createElement("td");
      tr.appendChild(url);
      let urlLink = document.createElement("a");
      urlLink.href = full[i].url;
      urlLink.target = "_blank";
      urlLink.innerHTML = "Visit";
      url.appendChild(urlLink);
    }
  });
