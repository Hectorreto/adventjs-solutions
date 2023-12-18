function autonomousDrive(store, movements) {
  let i, j

  for (let i2 = 0; i2 < store.length; i2++) {
    for (let j2 = 0; j2 < store[i2].length; j2++) {
      if (store[i2][j2] === '!') {
        i = i2
        j = j2
      }
    }
  }

  movements.forEach(movement => {
    if (movement === 'R' && '.!'.includes(store[i]?.[j+1])) { j++ }
    if (movement === 'L' && '.!'.includes(store[i]?.[j-1])) { j-- }
    if (movement === 'U' && '.!'.includes(store[i-1]?.[j])) { i-- }
    if (movement === 'D' && '.!'.includes(store[i+1]?.[j])) { i++ }
  })

  const _return = store.map((line, i2) => line.split('').map((space, j2) => {
    if (i2 === i && j2 === j) return '!'
    if (space === '!') return '.'
    return space
  }).join(''))

  return _return
}

const store = ['..!....', '...*.*.']
const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)
/*
[
  ".......",
  "...*!*."
]
*/