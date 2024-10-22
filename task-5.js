function cheaperThan(arr, price) {
  return arr.filter((item) => item < price);
}

console.log(cheaperThan([19.99, 29.87, 12.99, 5.0, 2.9, 100], 20)); // [19.99, 12.99, 5.00, 2.90]
console.log(cheaperThan([19.99, 29.87, 12.99, 5.0, 2.9, 100], 90)); // [19.99, 29.87, 12.99, 5.00, 2.90]
console.log(cheaperThan([19.99, 29.87, 12.99, 5.0, 2.9, 100], 0)); // []
console.log(cheaperThan([19.99, 29.87, 12.99, 5.0, 2.9, 100], 5)); // [2.9]
