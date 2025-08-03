let images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {
  console.log(
    (images[i].src =
      "https://elzero.org/wp-content/themes/elzero/imgs/logo.png")
  );
  console.log((images[i].alt = "Elzero Logo"));
}
