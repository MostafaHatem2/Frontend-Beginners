const getData = (apiLocation) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };
    myRequest.open("GET", apiLocation);
    myRequest.send();
  });
};

getData("./json.json")
  .then((result) => {
    result.length = 5;
    return result;
  })
  .then((result) => {
    let div = document.createElement("div");
    document.body.appendChild(div);
    result.forEach((article) => {
      div.innerHTML += `
        <div>
          <h3>${article.title}</h3>
          <p>${article.description}</p>
        </div>
      `;
    });
  })
  .catch((error) => {
    console.log(error);
  });
