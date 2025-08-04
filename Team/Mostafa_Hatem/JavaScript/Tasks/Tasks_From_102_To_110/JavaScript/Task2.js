let popup = document.createElement("div");

popup.style.width = "50%";
popup.style.margin = "100px auto";
popup.style.textAlign = "center";
popup.style.position = "relative";
popup.style.padding = "10px";
popup.style.backgroundColor = "#eee";
popup.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
popup.style.border = "1px solid #ccc";

let popupH1 = document.createElement("h1");
popupH1.textContent = "Welcome";
popup.appendChild(popupH1);

let popupP = document.createElement("p");
popup.appendChild(popupP);
popupP.textContent = "Welcome To Elzero Web School";

let popupCircle = document.createElement("div");
popupCircle.textContent = "X";
popup.appendChild(popupCircle);

popupCircle.style.backgroundColor = "red";
popupCircle.style.width = "30px";
popupCircle.style.height = "30px";
popupCircle.style.borderRadius = "50%";
popupCircle.style.cursor = "pointer";
popupCircle.style.display = "flex";
popupCircle.style.justifyContent = "center";
popupCircle.style.alignItems = "center";
popupCircle.style.color = "#fff";
popupCircle.style.margin = "10px";
popupCircle.style.position = "absolute";
popupCircle.style.top = "-15px";
popupCircle.style.right = "-15px";

popupCircle.addEventListener("click", () => {
  popup.remove();
});

setTimeout(function () {
  document.body.appendChild(popup);
}, 5000);
