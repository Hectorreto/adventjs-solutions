function checkIsValidCopy(original, copy) {
  if (original.length !== copy.length) return false

  for (let i = 0; i < original.length; i++) {
    if (original[i] === copy[i]) continue

    if (original[i].match(/[A-Z]/) && copy[i].match(/[a-z]/)) {
      if (original[i].toLowerCase() !== copy[i].toLowerCase()) return false
    }

    if (original[i].match(/[A-Z]/) && !copy[i].match(/[a-z#\+:\. ]/)) 
      return false
    if (original[i].match(/[a-z]/) && !copy[i].match(/[#\+:\. ]/)) return false
    if (original[i].match(/[#]/) && !copy[i].match(/[\+:\. ]/)) return false
    if (original[i].match(/[\+]/) && !copy[i].match(/[:\. ]/)) return false
    if (original[i].match(/[:]/) && !copy[i].match(/[\. ]/)) return false
    if (original[i].match(/[\.]/) && !copy[i].match(/[ ]/)) return true
    if (original[i] === ' ' && copy[i] !== ' ') return false
  }

  return true
}

checkIsValidCopy('Santa Claus', 's#+:.#c:. s')
