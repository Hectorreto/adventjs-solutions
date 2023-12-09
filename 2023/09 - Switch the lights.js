function adjustLights(lights) {
  let err1 = 0
  let err2 = 0

  lights.forEach((light, index) => {
    if (index % 2 === 0) {
      if (light === '🔴') {
        err1++
      }
      if (light === '🟢') {
        err2++
      }
    } else {
      if (light === '🟢') {
        err1++
      }
      if (light === '🔴') {
        err2++
      }
    }
  })

  return Math.min(err1, err2)
}

const result1 = adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
console.log(result1)
// -> 2 (you change the second light to 🟢 and the third to 🔴)
