function startsWithThe(text) {
  return text.toLowerCase().startsWith("the");
}

console.log(startsWithThe("hello")); // false
console.log(startsWithThe("theremin")); // true
console.log(startsWithThe("The Clash")); // true
console.log(startsWithThe("ding ding")); // false
console.log(startsWithThe("making of")); // false
