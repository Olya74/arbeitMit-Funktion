function addLeadingZero(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10) {
      newArr.push("0" + arr[i]);
    } else {
      newArr.push(arr[i].toString());
    }
  }
  return newArr;
}
console.log(addLeadingZero([0, 1, 2, 3, 10, 11, 12])); // ["00", "01", "02", "03", "10", "11", "12"]
console.log(addLeadingZero([1, 100])); // ["01", "100"]
console.log(addLeadingZero([1, 2, 3])); // ["01", "02", "03"]
