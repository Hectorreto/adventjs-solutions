function organizeChristmasDinner(dishes) {
  const result = {}

  dishes.forEach(dish => {
    const [name, ...ingredients] = dish

    ingredients.forEach(ingredient => {
      if (!result[ingredient]) result[ingredient] = {}
      result[ingredient][name] = true
    })

  })

  return Object.entries(result).map(entry => {
    const [name, ingredientsObj] = entry
    const ingredients = Object.keys(ingredientsObj)
    return [name, ...ingredients.sort()]
  }).filter((list) => {
    return list.length > 2
  }).sort()
}