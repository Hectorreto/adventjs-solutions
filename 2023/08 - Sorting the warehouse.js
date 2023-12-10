function organizeGifts(gifts) {
	let res = ''
	const regex = /(\d+)([^\d])/g
	const matches = gifts.matchAll(regex)

	for (const [, quantity, item] of matches) {
		const pallets = (quantity / 50) | 0
		const boxes = ((quantity - pallets * 50) / 10) | 0
		const bag = quantity % 10

		res += `[${item}]`.repeat(pallets)
		res += `{${item}}`.repeat(boxes)
		res += `(${item.repeat(bag)})`.repeat(bag > 0)
	}
	
	return res
}

const result1 = organizeGifts('76a11b')
console.log(result1)
// `[a]{a}{a}(aaaaaa){b}(b)`

const result2 = organizeGifts('20a')
console.log(result2)
// "{a}{a}"
