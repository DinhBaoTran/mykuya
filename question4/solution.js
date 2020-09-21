function getMaxMinValue(arr) {
  return {
    max: arr.reduce((acc, cur) => Math.max(acc, cur)),
    min: arr.reduce((acc, cur) => Math.min(acc, cur)),
  };
}

function canGetNestedInside(arr1, arr2) {
  const boundaryArr1 = getMaxMinValue(arr1);
  const boundaryArr2 = getMaxMinValue(arr2);
  return (
    boundaryArr1.min > boundaryArr2.min && boundaryArr1.max < boundaryArr2.max
  );
}

module.exports = canGetNestedInside;
