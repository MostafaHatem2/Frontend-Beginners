let myRequest = new XMLHttpRequest();
myRequest.open("GET", "./articles.json");
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let mainData = JSON.parse(this.responseText);
    mainData.forEach((article) => {
      article.category = "All";
    });
    console.log(mainData);
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
  }
};
