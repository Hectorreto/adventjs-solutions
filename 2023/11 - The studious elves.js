function getIndexsForPalindrome(word) {
  const reversed = word.split('').reverse().join('')

  if (word === reversed) {
    return []
  }

  for (let i = 0; i < word.length; i++) {
    for (let j = i+1; j < word.length; j++) {
      let array = word.split('');
      [array[i], array[j]] = [array[j], array[i]]
      
      if (array.join('') === array.reverse().join('')) {
        return [i, j]
      }
    }
  }

  return null
}

getIndexsForPalindrome('abab')
