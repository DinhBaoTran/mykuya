function sumOfAllDigitsIsOddOrsumOfAllDigitsIsEven(num) {
  const digits = Array.from(String(num), Number);
  return digits.reduce((acc, cur) => acc + cur) % 2 == 0
    ? "sumOfAllDigitsIsEven"
    : "sumOfAllDigitsIsOdd";
}

module.exports = sumOfAllDigitsIsOddOrsumOfAllDigitsIsEven;
