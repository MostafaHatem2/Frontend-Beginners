function checkRange(n1, n2, n3, n4, n5) {
  if (n1 >= n4 && n1 <= n5) {
    if (n2 >= n4 && n2 <= n5) {
      if (n3 >= n4 && n3 <= n5) {
        return "Yes All Numbers In Range";
      } else {
        return "Not All Numbers Is In Range";
      }
    }
  }
}

console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range
console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range
