let arr = [1, 1, 1, 2, 3, 4, 3];

let uniqueElements = [...new Set(arr)];
console.log(uniqueElements);

let uniqueArray = [...uniqueElements];
console.log(uniqueArray); // [1, 2, 3, 4]

let uniqueElements2 = arr.filter(
  (value, index) => arr.indexOf(value) === index
);
console.log(uniqueElements2);

let uniqueElements3 = [];
for (let i = 0; i < arr.length; i++) {
  if (!uniqueElements3.includes(arr[i])) {
    uniqueElements3.push(arr[i]);
  }
}
console.log(uniqueElements3);

let uniqueElements4 = arr.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(uniqueElements4);
