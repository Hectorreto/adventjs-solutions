function findNaughtyStep(original, modified) {
  let a = original
  let b = modified

  if (a.length < b.length) {
    a = modified
    b = original
  }

  let diff = ''

  for (let i = 0; i < a.length; i++) {
    let c = a.substring(0, i) + a.substring(i+1, a.length)

    diff = {
      true: a[i],
      false: diff,
    }[c === b]
  }

  return diff
}
