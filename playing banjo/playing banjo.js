function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase().match(/[r]/g)) {
    return `${name} plays banjo`;
  }
  return `${name} does not play banjo`;
}
