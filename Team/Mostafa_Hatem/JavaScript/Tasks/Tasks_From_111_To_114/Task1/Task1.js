let fontName = document.getElementById("fontName");
let fontColor = document.getElementById("fontColor");
let fontSize = document.getElementById("fontSize");

document.body.style.fontFamily = "Arial";
document.body.style.color = "red";
document.body.style.fontSize = "18px";

fontName.onchange = function () {
  document.body.style.fontFamily = fontName.value;
  window.localStorage.setItem("fontName", fontName.value);
};

fontColor.onchange = function () {
  document.body.style.color = fontColor.value;
  window.localStorage.setItem("fontColor", fontColor.value);
};

fontSize.onchange = function () {
  document.body.style.fontSize = fontSize.value + "px";
  window.localStorage.setItem("fontSize", fontSize.value + "px");
};

window.onload = function () {
  let savedFontName = window.localStorage.getItem("fontName");
  if (savedFontName) {
    document.body.style.fontFamily = savedFontName;
    fontName.value = savedFontName;
  }
  let savedFontColor = window.localStorage.getItem("fontColor");
  if (savedFontColor) {
    document.body.style.color = savedFontColor;
    fontColor.value = savedFontColor;
  }
  let savedFontSize = window.localStorage.getItem("fontSize");
  if (savedFontSize) {
    document.body.style.fontSize = savedFontSize;
    fontSize.value = savedFontSize;
  }
};
