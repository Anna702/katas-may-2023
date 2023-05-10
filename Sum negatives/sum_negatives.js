function countPositivesSumNegatives(input) {
  let output = [];
  let count = 0;
  let sum = 0;
  if (input === [] || input === null) {
    return [];
  }
  for (let i = 0; i <= input.length; i++) {
    if (input[i] > 0) {
      count += 1;
    }
    if (input[i] < 0) {
      sum += input[i];
    }
  }
  if (count === 0 && sum === 0) {
    return [];
  }
  output[0] = count;
  output[1] = sum;
  return output;
}
