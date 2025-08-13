function createStars(num) {
  // Your Code Here
  let i;
  for (i = 0; i < num * 2; i += 2) {
    console.log("*".repeat(i + 1));
  }

  if (i > num) {
    for (let j = i; j > 0; j -= 2) {
      console.log("*".repeat(j));
    }
  }
}

createStars(3);

// Output Needed
// *
// ***
// *****
// ***
// *
console.log("#".repeat(20));

createStars(7);

// Output Needed
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***********
// *********
// *******
// *****
// ***
// *
