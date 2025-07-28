let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
first = myFriends.indexOf("Ahmed");
console.log(myFriends.slice(first, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(first, num)); // ["Ahmed", "Elham", "Osama"];
