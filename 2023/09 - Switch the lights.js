function adjustLights(lights) {
  let err1 = 0
  let err2 = 0
  const mod = {
    0: {
      '🔴': [1, 0],
      '🟢': [0, 1],
    },
    1: {
      '🔴': [0, 1],
      '🟢': [1, 0],
    }
  }

  let parity = 0

  for (const light of lights) {
    err1 += mod[parity][light][0]
    err2 += mod[parity][light][1]
    parity = 1 - parity
  }

  return Math.min(err1, err2)
}

const result1 = adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
console.log(result1)
// -> 2 (you change the second light to 🟢 and the third to 🔴)
