var countSheep = function (num) {
  let countArr = [];
  for (let i = 1; i <= num; i++) {
    countArr.push(i + " sheep...");
  }
  return countArr.join("");
};
