function organizeGifts(gifts) {
	let res = ''
	const regex = /(\d+)([^\d])/g
	const matches = gifts.matchAll(regex)

	for (const match of matches) {
		const quantity = match[1]
		const item = match[2]

		const pallets = Math.floor(quantity / 50)
		const boxes = Math.floor((quantity - pallets*50) / 10)
		const bag = quantity - pallets*50 - boxes*10

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
