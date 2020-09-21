function findTheLowerCaseWOrd(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      result += str[i];
    }
  }
  return result;
}

module.exports = findTheLowerCaseWOrd;
