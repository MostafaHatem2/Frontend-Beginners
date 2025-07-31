/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

let counterTeams = 0;

let count = 0;

for (count = 0; count < myAdmins.length; count++) {
  console.log(count);
  if (myAdmins[count] === "Stop") {
    break;
  }
}

document.write(`<div>We Have ${count} Admins</div>`);

for (let i = 0; i < myAdmins.length; i++) {
  counterTeams++;
  if (myAdmins[i] === "Stop") {
    break;
  }
  let counterTeamsMembers = 1;
  document.write(
    `<hr><div>The Admain For Team ${counterTeams} Is ${myAdmins[i]}<br></div>`
  );
  document.write(`<h1>Team Members: </h1>`);
  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j].startsWith(myAdmins[i][0])) {
      document.write(`<p> - ${counterTeamsMembers++} ${myEmployees[j]} </p>`);
    }
  }
}
