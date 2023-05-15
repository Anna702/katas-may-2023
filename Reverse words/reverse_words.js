function reverseWords(str) {
  const reverseStr = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  return reverseStr.join(" ");
}
