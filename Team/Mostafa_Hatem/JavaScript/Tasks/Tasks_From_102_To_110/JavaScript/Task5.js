let count = document.createElement("div");
document.body.appendChild(count);
count.textContent = 10;

let countDown = setInterval(() => {
  count.textContent--;
  if (count.textContent < 5) {
    clearInterval(countDown);
    window.open(
      "https://elzero.org",
      "_blank",
      "width=400,height=400,left=50,top=70"
    );
  }
}, 1000);
