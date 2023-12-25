function compile(code) {
  let cnt = 0
  let index = 0
  let lastMark = -1
  let usedGoBack = {}

  while (index < code.length) {
    const sym = code[index]

    if (sym === '+') {
      cnt += 1
      index += 1
    } else if (sym === '*') {
      cnt *= 2
      index += 1
    } else if (sym === '-') {
      cnt -= 1
      index += 1
    } else if (sym === '%') {
      lastMark = index
      index += 1
    } else if (sym === '<') {
      if (!usedGoBack[index]) {
        usedGoBack[index] = true

        if (lastMark !== -1) {
          index = lastMark
        }
      }
      index += 1
    } else if (sym === '¿') {
      if (cnt > 0) {
        index += 1
      } else {
        while (index < code.length && code[index] !== '?') {
          index += 1
        }
      }
    } else {
      index += 1
    }
  }

  return cnt
}

compile('++*-') // 3
// (1 + 1) * 2 - 1 = 3

compile('++%++<') // 6
// 1 + 1 + 1 + 1 + 1 + 1 = 6

compile('++<--') // 0
// 1 + 1 - 1 - 1 = 0

compile('++¿+?') // 3
// 1 + 1 + 1 = 3

compile('--¿+++?') // -2
// - 1 - 1 = -2