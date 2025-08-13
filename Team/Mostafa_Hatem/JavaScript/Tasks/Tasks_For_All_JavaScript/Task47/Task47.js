form = document.getElementsByClassName("form");
textarea = document.querySelector("textarea");
button = document.querySelector("button");

button.addEventListener("click", () => {
  //   let blob = new Blob([textarea.value], { type: "text/plain" });
  let blob = new Blob([textarea.value], { type: "text/plain" });
  let url = URL.createObjectURL(blob);
  let link = document.createElement("a");
  let nameFile = prompt("Enter Your File Name ");
  link.href = url;
  link.download = nameFile + ".txt";
  link.click();
  URL.revokeObjectURL(url);
});
