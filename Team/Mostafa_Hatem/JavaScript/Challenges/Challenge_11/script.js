/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split(",")
  .filter((ele) => isNaN(ele) && ele !== "_")
  .map((ele) => {
    return ele.length > 1
      ? ele
          .split("")
          .filter((char, index, arr) => char !== arr[index + 1])
          .join("")
      : ele;
  })
  .slice(0, -1);
solution.splice(6, 0, " ");
solution.splice(10, 0, " ");
let final = solution.join("");

console.log(final); // Elzero Web School

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString
//   .split("")
//   .filter(function (ele) {
//     return isNaN(ele);
//   })
//   .map(function (ele) {
//     return ele !== "," ? ele : "";
//   })
//   .reduce(function (acc, curr) {
//     return acc + curr;
//   })
//   .slice(true, -!false)
//   .split("_")
//   .join(" ");

// console.log(solution);
