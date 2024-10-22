function cutStrings(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      newArr.push(arr[i].slice(0, num) + "...");
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  cutStrings(
    [
      "Hello my name is Max",
      "Today is quite sunny outside",
      "Cats are the best",
      "This movie is boring",
    ],
    10
  )
); //["Hello my n...", "Today is q...", "Cats are t...", "This movie..."]
console.log(
  cutStrings(
    [
      "Hello my name is Max",
      "Today is quite sunny outside",
      "Cats are the best",
      "This movie is boring",
    ],
    2
  )
); //["He...", "To...", "Ca...", "Th..."]
