function getNumberOfLayers(rug) {
  // center layer index
  let preInx = Math.floor(rug.length / 2);

  let result = 1; // Count the center layer
  for (let i = Math.floor(rug.length / 2) + 1; i < rug.length; i++) {
    if (rug[i] !== rug[preInx]) {
      result++;
    }
    preInx = i;
  }
  return result;
}

module.exports = getNumberOfLayers;
