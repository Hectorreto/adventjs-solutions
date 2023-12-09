function maxDistance(movements) {
  let l = 0;
  let r = 0;
  let a = 0;

  for (const m of movements) {
    l += m === '<'
    r += m === '>'
    a += m === '*'
  }

  return {
    true: l + a - r,
    false: r + a - l,
  }[l > r]
}
