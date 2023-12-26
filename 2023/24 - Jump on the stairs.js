function getStaircasePaths(steps, maxJump) {
  const res = []
  const array = []

  const calc = (sum, index) => {
    if (sum > steps) return
    if (sum === steps) return res.push(array.slice(0, index))

    for (let i = 1; i <= maxJump; i++) {
      array[index] = i
      calc(sum + i, index + 1)
    }
  }

  calc(0, 0)

  return res
}

getStaircasePaths(2, 1) // [[1, 1]]
getStaircasePaths(3, 3) // [[1, 1, 1], [1, 2], [2, 1], [3]]
getStaircasePaths(5, 1) // [[1, 1, 1, 1, 1]]
getStaircasePaths(5, 2)
/*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/