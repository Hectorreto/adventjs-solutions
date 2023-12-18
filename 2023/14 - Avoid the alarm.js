function maxGifts(houses) {
  const cache = {}
  const sumat = [...houses]
  let max = 0

  for (let i = houses.length-2; i >= 0; i--) {
    sumat[i] += sumat[i+1]
  }

  const solve = (i, v, alarm) => {
    if (i >= houses.length) return v
    if (v + sumat[i] <= max) return v
    if (cache[`${[i,v,alarm]}`]) return cache[`${[i,v,alarm]}`]

    const res = []
    res.push(solve(i+1, v, false))

    if (!alarm) {
      res.push(solve(i+1, v+houses[i], true))
    }

    const result = Math.max(...res)
    cache[`${[i,v,alarm]}`] = result
    max = Math.max(max, result)
    return result
  }

  const result = solve(0, 0, false)
  return result
}

maxGifts([1, 2, 3, 1]) // 4
maxGifts([2, 7, 9, 3, 1]) // 12
maxGifts([0, 0, 0, 0, 1]) // 1
maxGifts([100]) // 100
maxGifts([1, 1, 1, 1]) // 2
maxGifts([1, 1, 1]) // 2
maxGifts([3, 4, 5]) // 8
maxGifts([99]) // 99


maxGifts([5, 1, 1, 5]) // 10
maxGifts([4, 1, 1, 4, 2, 1]) // 9
maxGifts([1, 3, 1, 3, 100]) // 103