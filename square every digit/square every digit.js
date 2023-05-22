function squareDigits(num) {
  let resultArray = [];
  const arrayFromNum = Array.from(String(num), Number);
  arrayFromNum.map((digit) => {
    resultArray.push(digit * digit);
  });
  const resultInt = Number(resultArray.join(""));
  return resultInt;
}
