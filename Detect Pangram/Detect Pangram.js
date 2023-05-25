function isPangram(string) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  return alphabets.every((x) => string.toLowerCase().includes(x));
}
