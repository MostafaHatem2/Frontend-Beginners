let xhr = new XMLHttpRequest();
xhr.open("GET", "./articles.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
    console.log("Data Loaded");
  }
};
// Needed Output

// "JSON Object Content Here";
// "Data Loaded";
