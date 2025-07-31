function specialMix(...data) {
  // Your Code Here
    let sum = 0;
    let isAllStrings = true;
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'number') {
            sum += data[i];
            isAllStrings = false;
        } else if (typeof data[i] === 'string') {
            const num = parseInt(data[i], 10);
            if (!isNaN(num)) {
                sum += num;
                isAllStrings = false;
            }
        }
    }
    return isAllStrings ? "All Is Strings" : sum;
}


console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings