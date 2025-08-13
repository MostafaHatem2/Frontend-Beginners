let st = "Elzero";

// 1
console.log(st.charAt(st.length - 1));
// 2
console.log(st.charAt(5));
// 3
console.log(st.slice(-1));
// 4
console.log(st.substring(st.length - 1));
// 5
console.log(st[st.length - 1]);
// 6
console.log(st.at(-1));
// 7
console.log([...st].pop());

// Needed Output
// ("o");
// ("o");
// ("o");
// ("o");
// ("o");
// ("o");
// ("o");
