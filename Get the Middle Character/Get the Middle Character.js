function getMiddle(s) {
  const middle = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    return s[middle - 1] + s[middle];
  }
  return s[middle];
}
