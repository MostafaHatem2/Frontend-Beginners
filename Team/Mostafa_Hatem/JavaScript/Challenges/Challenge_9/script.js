/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(...status) {
  let name = "";
  let age = 0;
  let statu = true;
  for (let i = 0; i < status.length; i++) {
    typeof status[i] == "string"
      ? (name = status[i])
      : typeof status[i] == "number"
      ? (age = status[i])
      : typeof status[i] == "boolean" && status[i] == true
      ? (statu = "You Are Available For Hire")
      : typeof status[i] == "boolean" && status[i] == false
      ? (statu = "You Are Not Available For Hire")
      : console.log("Unknown");
  }
  console.log(`Hello ${name} , Your Age Is ${age} , ${statu}`);
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
