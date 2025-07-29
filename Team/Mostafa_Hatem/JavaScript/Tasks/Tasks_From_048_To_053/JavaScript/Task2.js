let start = 10;
let end = 0;
let stop = 3;

console.log(start.toString());
for (let decric = start; decric > end; decric--) {
  if (decric < stop) {
    break;
  }
  if (decric < 10) {
    console.log("0" + decric);
  }
}
