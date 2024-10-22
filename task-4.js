function isFirstLetterLowerCase(str) {
  if (str.length === 0) {
    return false;
  }
  return str[0] === str[0].toLowerCase();
}
console.log(isFirstLetterLowerCase("hello")); // true
console.log(isFirstLetterLowerCase("Hello")); // false
console.log(isFirstLetterLowerCase("Bianca")); // false
console.log(isFirstLetterLowerCase("jim")); // true
console.log(isFirstLetterLowerCase("")); // false
console.log(isFirstLetterLowerCase("A")); // false )
