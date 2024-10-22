function sumEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(sumEvenNumbers([100]));
console.log(sumEvenNumbers([100, 1, 3])); //100;
console.log(sumEvenNumbers([-2, 4, 3])); //2;
