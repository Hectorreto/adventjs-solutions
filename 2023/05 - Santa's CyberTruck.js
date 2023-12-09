function cyberReindeer(road, time) {
  const result = [road]
  let under = '.'
  let s = 0

  for (let t = 1; t < time; t++) {
    if (t === 5) {
      road = road.replaceAll('|', '*')
    }

    const next = road[s+1]
    if (next !== '|') {
      road = road.slice(0, s) + under + 'S' + road.slice(s+2, road.length)
      under = next
      s++
    }

    result.push(road)
  }

  return result
}