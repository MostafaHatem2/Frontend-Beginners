let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
let result = [];

// Your Code Here
for (let i = 0; i < names.length; i++) {
  let frist = names[i][0].toLowerCase();
  let last = names[i][names[i].length - 1].toLowerCase();
  if (frist == last) {
    result.push(names[i]);
  }
}

console.log(result); // ['Osso', 'Aola', 'Daad', 'Roor']
