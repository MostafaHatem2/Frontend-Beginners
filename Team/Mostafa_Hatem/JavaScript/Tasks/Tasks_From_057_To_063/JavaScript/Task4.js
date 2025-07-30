function checkStatus(a, b, c) {
  let name = "";
  let age = 0;
  let status = "";

  let args = [a, b, c]; // جميع المدخلات

  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "string") {
      name = args[i];
    } else if (typeof args[i] === "number") {
      age = args[i];
    } else if (typeof args[i] === "boolean") {
      status = args[i]
        ? "You Are Available For Hire"
        : "You Are Not Available For Hire";
    }
  }

  console.log(`Hello ${name}, Your Age Is ${age}, ${status}`);
}
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
