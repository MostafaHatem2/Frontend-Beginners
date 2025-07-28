let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

haystack.includes(needle) == true
  ? console.log("Found")
  : console.log("Not Found");

needle == haystack[haystack.indexOf(needle)]
  ? console.log("Found")
  : console.log("Not Found");

needle == haystack.find((element) => element == needle)
  ? console.log("Found")
  : console.log("Not Found");
