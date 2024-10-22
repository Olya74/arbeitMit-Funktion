function countConsonants(str) {
  let consonant = "bcdfghjklmnpqrstvwxyz";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (consonant.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
console.log(countConsonants("hello")); // 3
console.log(countConsonants("aeiou")); // 0
console.log(countConsonants("be right back")); // 8
console.log(countConsonants("JavaScript")); // 7
