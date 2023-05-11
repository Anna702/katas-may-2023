function getSum(a, b) {
  if (a === b) {
    return a;
  }
  let sum = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  }
  if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  }
  return sum;
}
