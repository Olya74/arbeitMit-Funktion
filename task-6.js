function wordsThatEndWithIng(words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].endsWith("ing")) {
      result.push(words[i]);
    }
  }
  return result;
}

console.log(
  wordsThatEndWithIng(["table", "jeans", "working", "ping", "small"])
); // ["working", "ping"]
console.log(wordsThatEndWithIng(["table", "jeans", "small"])); // []
console.log(wordsThatEndWithIng(["walking", "ing"])); // ["walking", "ing"]
console.log(wordsThatEndWithIng(["walking ", "ingbbb"])); // []
