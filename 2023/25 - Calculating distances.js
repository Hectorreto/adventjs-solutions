function travelDistance(map) {
  const coords = []
  const mapArray = map.split('\n')

  for (let i = 0; i < mapArray.length; i++) {
    for (let j = 0; j < mapArray[i].length; j++) {
      const c = mapArray[i][j]
      if (c === '.') continue

      if (c === 'S') {
        coords[0] = { i, j }
      } else {
        coords[c] = { i, j }
      }
    }
  }

  let dist = 0
  for (let k = 1; k < coords.length; k++) {
    dist += Math.abs(coords[k-1].i - coords[k].i)
    dist += Math.abs(coords[k-1].j - coords[k].j)
  }

  return dist
}

const map = `.....1....
..S.......
..........
....3.....
......2...`

const result = travelDistance(map)
console.log(result) // -> 12 km
/*
From S to kid 1: 4 moves
From kid 1 to 2: 5 moves
From kid 2 to 3: 3 moves
Total: 12 moves
*/

const result2 = travelDistance(`..S.1...`)
console.log(result2) // -> 2