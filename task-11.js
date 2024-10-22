function durationInHours(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.floor(arr[i] / 60));
  }
  return newArr;
}
console.log(durationInHours([120, 60, 80, 90, 100])); // [2, 1, 1, 1, 1]
console.log(durationInHours([50, 20, 180])); // [0, 0, 3]
