fetch("./json.json")
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((full) => {
    full.length = 5;
    return full;
  })
  .then((full) => {
    let div = document.createElement("div");
    document.body.appendChild(div);
    full.forEach((article) => {
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
