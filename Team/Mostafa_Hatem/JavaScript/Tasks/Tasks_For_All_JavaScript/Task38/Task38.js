let str = "i lovE elzeRO weB schOOL";

str = str.split(" ");
let result = [];

for (let i = 0; i < str.length; i++) {
  if (str[i][0] == str[i][0].toLocaleLowerCase()) {
    result.push(str[i][0].toUpperCase() + str[i].slice(1).toLowerCase());
  } else {
    result.push(str[i][0].toLowerCase() + str[i].slice(1).toLowerCase());
  }
}

console.log(result.join(" "));

// Output Needed
// ("I Love Elzero Web School");
