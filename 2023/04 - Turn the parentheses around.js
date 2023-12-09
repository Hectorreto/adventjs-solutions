function decode(message) {
  let j = 0
  let groups = ['']

  const modJ = {
    '(': 1,
    ')': -1,
  }


  for (let i = 0; i < message.length; i++) {
    j += modJ[message[i]] ?? 0

    if (message[i] === '(') {
      groups[j] = ''
    } else if (message[i] === ')') {
      if (j % 2 === 0) {
        groups[j] = groups[j] + groups[j+1]
      } else {
        groups[j] = groups[j+1] + groups[j]
      }
    } else {
      if (j % 2 === 0) {
        groups[j] = groups[j] + message[i]
      } else {
        groups[j] = message[i] + groups[j]
      }
    }
  }

  return groups[0]
}
