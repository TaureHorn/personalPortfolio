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

const characters =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!£$%^&*~:#@?.=-_|+=ŧøæßðđŋł¢";

export function genRand(length) {
  let rand = "";
  for (let i = 0; i < length; i++) {
    const randNum = parseInt(Math.random() * characters.length);
    rand += characters.slice(randNum, randNum + 1);
  }
  return rand;
}
