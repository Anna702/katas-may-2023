function openOrSenior(data) {
  let members = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      members.push("Senior");
      continue;
    }
    members.push("Open");
  }
  return members;
}
