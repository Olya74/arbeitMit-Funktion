function sumEvenOdd(arr) {
  let sumEven = 0;
  let sumOdd = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEven += arr[i];
    } else {
      sumOdd += arr[i];
    }
  }
  result[0] = sumEven;
  result[1] = sumOdd;
  return result;
}
console.log(sumEvenOdd([1, 2, 3, 4, 5, 6])); // [12, 9]
console.log(sumEvenOdd([0, -2, 11])); // [-2, 11]
console.log(sumEvenOdd([1, 3, 15])); // [0, 19]
