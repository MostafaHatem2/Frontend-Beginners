let images = document.querySelectorAll("img");

images.forEach((img) => {
  if (img.hasAttribute("alt")) {
    img.setAttribute("alt", "Old");
  } else {
    img.setAttribute("alt", "Elzero New");
  }
});
