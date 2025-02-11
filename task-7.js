function numbersDivisibleBy3(numbers) {
  return numbers.filter((number) => number % 3 === 0);
}

console.log(numbersDivisibleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [3, 6, 9]
console.log(numbersDivisibleBy3([2, 4, 8])); // []
console.log(numbersDivisibleBy3([9])); // [9]
