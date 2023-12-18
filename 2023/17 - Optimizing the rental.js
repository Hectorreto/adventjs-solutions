function optimizeIntervals(intervals) {
  let current = intervals
  let result = []

  while (true) {
    let simplified = false

    current.forEach(([s1, e1]) => {
      const item = result.find(([s2, e2]) => {
        if (s1 >= s2 && s1 <= e2) return true
        if (e1 >= s2 && e1 <= e2) return true
        if (s2 >= s1 && s2 <= e1) return true
        if (e2 >= s1 && e2 <= e1) return true
      })
  
      if (item) {
        item[0] = Math.min(item[0], s1)
        item[1] = Math.max(item[1], e1)
        simplified = true
      } else {
        result.push([s1, e1])
      }
    })

    if (!simplified) break
    current = result
    result = []
  }

  result.sort((a, b) => {
    if (a[0] < b[0]) return -1
    if (a[0] > b[0]) return 1

    if (a[1] < b[1]) return -1
    if (a[1] > b[1]) return 1

    return 0
  })

  return result
}

optimizeIntervals([[3, 4], [5, 8], [2, 7]])
