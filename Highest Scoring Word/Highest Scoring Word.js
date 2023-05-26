function high(x) {
  let maxScore = 0;
  let result = "";
  const words = x.split(" ");
  for (let i = 0; i < words.length; i++) {
    let wordScore = 0;
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      wordScore += word[j].toLowerCase().charCodeAt(0) - 96;
    }
    if (wordScore > maxScore) {
      maxScore = wordScore;
      result = word;
    }
  }
  return result;
}
