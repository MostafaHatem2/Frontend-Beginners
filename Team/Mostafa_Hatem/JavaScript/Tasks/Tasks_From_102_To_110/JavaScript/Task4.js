let count = document.createElement("div");
document.body.appendChild(count);
count.textContent = 10;

let countDown = setInterval(() => {
  count.textContent--;
  if (count.textContent == 0) {
    clearInterval(countDown);
    window.open("https://elzero.org", "_blank");
  }
}, 1000);
