function distributeGifts(weights) {
  const result = weights.map(() => [])
  const directions = [
             [-1, 0],
    [0, -1], [ 0, 0], [0, 1],
             [ 1, 0],
  ]

  for (let i = 0; i < weights.length; i++) {
    for (let j = 0; j < weights[i].length; j++) {
      let cnt = 0
      let sum = 0

      for (const dir of directions) {
        const val = weights[i+dir[0]]?.[j+dir[1]]
        if (val || val === 0) {
          cnt++
          sum += val
        }
      }

      result[i][j] = Math.round(sum / cnt)
    }
  }

  return result
}
