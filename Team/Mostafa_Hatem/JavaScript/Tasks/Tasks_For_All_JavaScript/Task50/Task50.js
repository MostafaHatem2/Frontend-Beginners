function createStars(num) {
  // Your Code Here
  let i;
  for (i = num * 2 - 1; i > 0; i -= 2) {
    console.log(" ".repeat(num - i / 2) + "*".repeat(i));
  }
  for (i = 1; i <= num * 2 - 1; i += 2) {
    console.log(" ".repeat(num - i / 2) + "*".repeat(i));
  }
}
createStars(6);

// Output Needed
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

//? Iam Finshed i Not Beleve Thanks Eng/ Osama Mohamed ("Elzreo")
