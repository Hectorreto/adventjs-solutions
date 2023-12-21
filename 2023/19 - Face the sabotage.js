function revealSabotage(store) {
  const directions = [
    [-1, -1], [-1,  0], [-1,  1],
    [ 0, -1],           [ 0,  1],
    [ 1, -1], [ 1,  0], [ 1,  1],
  ]

  let i = 0
  for (const line of store) {
    let j = 0
    for (const c of line) {
      if (store[i][j] !== '*') {
        let cnt = 0
        for (const dir of directions) {
          if (store[i + dir[0]]?.[j + dir[1]] === '*') {
            cnt += 1
          }
        }

        if (cnt) {
          store[i][j] = `${cnt}`
        }
      }
      j++
    }
    i++
  }

  return store
}

const store = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
]

console.log(revealSabotage(store))
/* Should display:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/