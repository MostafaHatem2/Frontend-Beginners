function ageInTime(theAge) {
  // Your Code Here
  if (theAge <= 100 && theAge >= 10) {
    console.log(`Months => ${theAge * 12} Months`);
    console.log(`Weeks => ${theAge * 52} Weeks`);
    console.log(`Days => ${theAge * 365} Days`);
    console.log(`Hours => ${theAge * 8760} Hours`);
    console.log(`Minutes => ${theAge * 525600} Minutes`);
    console.log(`Seconds => ${theAge * 31536000} Seconds`);
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months => 456 Months
