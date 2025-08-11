let myRequest = new XMLHttpRequest();
myRequest.open("GET", "./articles.json");
myRequest.send();
let data = document.createElement("div");
data.id = "data";
document.body.appendChild(data);
myRequest.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let mainData = JSON.parse(this.responseText);
    mainData.forEach((article) => {
      let articleElement = document.createElement("div");
      articleElement.id = article.id;
      articleElement.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.body}</p>
      <p>${article.category}</p>
      <p>${article.author}</p>
      `;
      data.appendChild(articleElement);
    });
  }
};
