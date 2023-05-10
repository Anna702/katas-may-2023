function printerError(s) {
  let mistakes = 0;
  for (let i = 0; i < s.length; i++) {
    if (!s[i].toLowerCase().match(/[a-m]/gm)) {
      mistakes += 1;
    }
  }
  return `${mistakes}/${s.length}`;
}
