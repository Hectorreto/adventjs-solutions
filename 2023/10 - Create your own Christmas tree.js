function createChristmasTree(ornaments, height) {
  let res = ''
  let index = 0

  for (let i = 0; i < height; i++) {
    res += ' '.repeat(height-1-i)

    const line = []
    for (let j = 0; j <= i; j++) {
      line.push(ornaments[index])
      index = (index + 1) % ornaments.length
    }

    res += line.join(' ')
    res += '\n'
  }

  res += ' '.repeat(height-1)
  res += '|\n'

  return res
}
