const myData = {
  user: "Elzero",
  age: 41,
  country: "Egypt",
};

// Write Your Code Here
Object.preventExtensions(myData);

myData.skill = "Programming";

console.log(myData.user); // Elzero
console.log(myData.age); // 41
console.log(myData.country); // Egypt
console.log(myData.skill); // Undefined
