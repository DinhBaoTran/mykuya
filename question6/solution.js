function moveAllUppercaseLetetrsToFirst(s) {
  let upperCaseStr = '';
  let lowerCaseStr = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      lowerCaseStr += s[i];
    } else {
      upperCaseStr += s[i];
    }
  }
  return `${upperCaseStr}${lowerCaseStr}`;
}

module.exports = moveAllUppercaseLetetrsToFirst;
