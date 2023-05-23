function cakes(recipe, available) {
  let result = [];
  for (const ingredient in recipe) {
    if (!available.hasOwnProperty(ingredient)) {
      return 0;
    }
    let quantity = Math.floor(available[ingredient] / recipe[ingredient]);
    result.push(quantity);
  }
  return Math.min(...result);
}
