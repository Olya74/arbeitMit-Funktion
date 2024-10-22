function reverseWords(words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let reversedWord = "";
    for (let j = words[i].length - 1; j >= 0; j--) {
      reversedWord += words[i][j];
    }
    result.push(reversedWord);
  }
  return result;
}

console.log(reverseWords(["cat", "shoe", "one", "sos", "hello"])); // ["tac", "eohs", "eno", "sos", "olleh"]
