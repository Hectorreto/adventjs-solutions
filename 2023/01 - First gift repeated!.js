function findFirstRepeated(gifts) {
  let res = gifts.find((v, i) => gifts.indexOf(v) !== i)
  
  const obj = {
    [res]: res,
    undefined: -1,
  }

  return obj[res]
}


// function findFirstRepeated(gifts) {  
//   let i = 0
//   let res = -1

//   for (const gift of gifts) {
//     const index = gifts.indexOf(gift)
//     const mod2 = new Map([
//       [res, res],
//       [-1, gift],
//     ])
//     const mod1 = new Map([
//       [true, mod2.get(res)],
//       [false, res]
//     ])
//     res = mod1.get(index !== i)

//     i++
//   }

//   return res
// }

const result1 = findFirstRepeated([2, 1, 3, 5, 3, 2])
console.log(result1)
// 3

const result2 = findFirstRepeated([2, 4, 3, 5, 1])
console.log(result2)
// -1
