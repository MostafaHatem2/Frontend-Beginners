let start = new Date();

for (let i = 0; i < 99999; i++) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(i));
  document.body.appendChild(div);
}

let end = new Date();
let duration = end - start;
console.log(`Loop Took ${duration} Milliseconds.`);

// Needed Output

// "Loop Took 1921 Milliseconds.";
