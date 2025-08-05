let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let age = document.getElementById("age");
let program = document.getElementById("program");

fname.onchange = function () {
  window.sessionStorage.setItem("fname", fname.value);
};

lname.onchange = function () {
  window.sessionStorage.setItem("lname", lname.value);
};

age.onchange = function () {
  window.sessionStorage.setItem("age", age.value);
};

program.onchange = function () {
  window.sessionStorage.setItem("program", program.value);
};

window.onload = function () {
  let savedFname = window.sessionStorage.getItem("fname");
  if (savedFname) {
    fname.value = savedFname;
  }
  let savedLname = window.sessionStorage.getItem("lname");
  if (savedLname) {
    lname.value = savedLname;
  }
  let savedAge = window.sessionStorage.getItem("age");
  if (savedAge) {
    age.value = savedAge;
  }
  let savedProgram = window.sessionStorage.getItem("program");
  if (savedProgram) {
    program.value = savedProgram;
  }
};
