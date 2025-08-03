let input = document.querySelector("input[name='dollar']");
let resultDiv = document.querySelector(".result");

input.addEventListener("input", function () {
  let dollarValue = parseFloat(this.value);

  if (!isNaN(dollarValue)) {
    let egp = (dollarValue * 48.34).toFixed(2);
    resultDiv.textContent = `${dollarValue} USD Dollar = ${egp} Egyptian Pound`;
  } else {
    resultDiv.textContent = "Please enter a valid number";
  }
});

// We in Hill
