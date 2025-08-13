let st = "elzero";

// 1
console.log(st[0].toUpperCase() + st.slice(1));
// 2
console.log(st.charAt(0).toUpperCase() + st.slice(1));
// 3
console.log(st.replace(st[0], st[0].toUpperCase()));
// 4
console.log(st.replace(/^./, st[0].toUpperCase()));
// 5
console.log(
  st
    .split("")
    .map((c, i) => (i === 0 ? c.toUpperCase() : c))
    .join("")
);
// 6
console.log(st.substring(0, 1).toUpperCase() + st.substring(1));
// 7
console.log(`${st[0].toUpperCase()}${st.substring(1)}`);

// Output Needed

// ("Elzero");
// ("Elzero");
// ("Elzero");
// ("Elzero");
// ("Elzero");
// ("Elzero");
// ("Elzero");
