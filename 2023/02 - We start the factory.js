function manufacture(gifts, materials) {
  return gifts
    .filter(
      (gift) => gift
        .split('')
        .every((c) => materials.includes(c))
    )
}
