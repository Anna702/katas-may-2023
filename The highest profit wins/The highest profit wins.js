function minMax(arr) {
  let newArr = [];
  newArr.push(Math.min(...arr));
  newArr.push(Math.max(...arr));
  return newArr;
}
