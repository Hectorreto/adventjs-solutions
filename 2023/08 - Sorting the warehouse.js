function organizeGifts(gifts) {
	let res = []
	const regex = /(\d+)([^\d])/g
	const matches = gifts.matchAll(regex)

	for (const [_, quantity, item] of matches) {
		const pallets = quantity / 50 - (quantity / 50 % 1)
		const boxes = (quantity - pallets*50) / 10 - ((quantity - pallets*50) / 10 % 1)
		const bag = quantity - pallets*50 - boxes*10

		res.push(
      `[${item}]`.repeat(pallets),
      `{${item}}`.repeat(boxes),
      `(${item.repeat(bag)})`.repeat(bag > 0),
    )
	}
	
	return res.join('')
}

const result1 = organizeGifts('76a11b')
console.log(result1)
// `[a]{a}{a}(aaaaaa){b}(b)`

const result2 = organizeGifts('20a')
console.log(result2)
// "{a}{a}"
