function drawGift(size, symbol) {
  if (size <= 1) return '#\n'

  let res = ''

  res += ' '.repeat(size-1) + '#'.repeat(size) + '\n'
  for (let i = 0; i < size-2; i++) {
    res += ' '.repeat(size-2-i) + '#'
    res += symbol.repeat(size-2) + '#'
    res += symbol.repeat(i) + '#\n'
  }
  res += '#'.repeat(size) + symbol.repeat(size-2) + '#\n'
  for (let i = 0; i < size-2; i++) {
    res += '#' + symbol.repeat(size-2) + '#'
    res += symbol.repeat(size-3-i) + '#\n'
  }
  res += '#'.repeat(size) + '\n'

  return res
}
