function nbYear(p0, percent, aug, p) {
  const convertedPercent = percent / 100;
  let count = 0;
  for (count = 0; p0 < p; count++) {
    p0 = Math.floor(p0 + p0 * convertedPercent + aug);
  }
  return count;
}
