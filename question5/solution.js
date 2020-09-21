function convertToArray(obj) {
  const result = [];
  for (const [key, value] of Object.entries(obj)) {
    result.push([key, value]);
  }
  return result;
}

module.exports = convertToArray;
