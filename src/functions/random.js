function randHex(variance) {
  let multiplier = 16777215;
  if (variance > 0 && variance <= 1) {
    multiplier = multiplier / variance;
  }
  return "#" + Math.floor(Math.random() * multiplier).toString(16);
}

export function hexArrayAssembler(arrLength, variance) {
  const hexArray = [];
  while (hexArray.length < arrLength) {
    hexArray.push(randHex(variance));
  }
  return hexArray;
}
