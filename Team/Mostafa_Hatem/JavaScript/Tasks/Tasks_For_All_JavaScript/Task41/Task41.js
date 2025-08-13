const myData = {
  user: "Elzero",
  age: 41,
  country: "Egypt",
};

// Your Code Here
let cloned = Object.assign({}, myData);

console.log(cloned); // {user: 'Elzero', age: 41, country: 'Egypt'}

let clone = [myData];

console.log(...clone);

let deepClone = JSON.parse(JSON.stringify(myData));

console.log(deepClone);
