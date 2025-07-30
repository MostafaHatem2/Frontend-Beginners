function sayHello(theName, theGender) {
  // Your Code Here
  theGender == "Male"
    ? console.log(`Hello Mr ${theName}`)
    : theGender == "Female"
    ? console.log(`Hello Miss ${theName}`)
    : theGender == undefined
    ? console.log(`Hello ${theName}`)
    : console.log(`Hello ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
