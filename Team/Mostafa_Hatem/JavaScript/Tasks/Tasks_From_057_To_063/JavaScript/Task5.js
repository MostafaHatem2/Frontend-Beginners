function createSelectBox(startYear, endYear) {
  // Your Code Here
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<select>
        <option value=${i}>${i}</option>
        </select>`);
  }
}
createSelectBox(2000, 2021);
