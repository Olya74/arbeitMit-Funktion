function countByColor(arr) {
  let count = [0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("Red")) {
      count[0]++;
    } else if (arr[i].includes("Yellow")) {
      count[1]++;
    } else if (arr[i].includes("Green")) {
      count[2]++;
    }
  }
  return count;
}
console.log(countByColor(["Red pen", "Yellow shirt"])); // [1, 1, 0]
console.log(countByColor(["Red pen", "Yellow shirt", "Green salad"])); // [1, 1, 1]
console.log(countByColor(["Pink hair", "Blue sky"])); // [0, 0, 0]
console.log(countByColor(["Yellow table", "Yellow piano", "Green guitar"])); // [0, 2, 1]
