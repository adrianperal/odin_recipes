function add7(num) {
  return num + 7;
}

function multiply(x, y) {
  return x * y;
}

function capitalize(str) {
  //str 'eXampLe'
  str = str.toLowerCase(); // str 'example'
  return str.charAt(0).toUpperCase() + str.slice(1); // str2 = E + xample
}

function lastLetter(str) {
  return str[str.length - 1];
}

console.log(lastLetter("password"));
console.log(capitalize("paSSwoRd"));
