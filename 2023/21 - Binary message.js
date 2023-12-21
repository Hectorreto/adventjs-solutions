function findBalancedSegment(message) {
  const res = [0, -1]

  for (let i = 0; i < message.length; i++) {
    let cnt = [0, 0]

    for (let j = i; j < message.length; j++) {
      cnt[message[j]]++

      if (cnt[0] === cnt[1]) {
        if (j - i > res[1] - res[0]) {
          res[0] = i
          res[1] = j
        }
      }
    }

  }

  if (res[1] === -1) {
    return []
  } else {
    return res
  }
}

findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
//                         |________|
// position of segment:    [2, 5]
// longest balanced
// of 0s and 1s

findBalancedSegment([1, 1, 0])
//                      |__|
//                     [1, 2]

findBalancedSegment([1, 1, 1])
// no balanced segments: []
