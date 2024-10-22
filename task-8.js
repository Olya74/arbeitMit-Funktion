function onlyLongWords(str) {
  let words = str.split(" ");
  let longWords = words.filter((word) => word.length > 4);
  return longWords.join(" ");
}
console.log(
  onlyLongWords(
    "Welcome to Wikipedia the free encyclopedia that anyone can edit"
  )
); // "Welcome Wikipedia encyclopedia anyone"
console.log(onlyLongWords("The cat is on the table")); // "table"
console.log(onlyLongWords("not many long ones here")); // ""
