let start = 10;
let end = 100;
let exclude = 40;

for (let incirement = start; incirement < end; incirement += start) {
  if (incirement == exclude) {
    continue;
  }
  console.log(incirement);
}
