function createStars(num) {
  // Your Code Here
  for (let i = 0; i < num * 2; i += 2) {
    console.log("*".repeat(i + 1));
  }
}

createStars(8);

// Output Needed
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***************
