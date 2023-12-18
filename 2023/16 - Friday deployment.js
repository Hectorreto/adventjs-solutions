function transformTree(tree) {
  if (tree.length === 0) {
    return null
  }

  let index = 0
  const root = { value: null, left: null, right: null }
  const queue = [[root, tree[index++]]]

  while (queue.length) {
    const [target, value] = queue.shift()

    target.value = value
    target.left = null
    target.right = null

    if (index < tree.length) queue.push([target.left = {}, tree[index++]])
    if (index < tree.length) queue.push([target.right = {}, tree[index++]])
  }

  const simplify = (target) => {
    if (target.left?.value === null) {
      target.left = null
    } else if (target.left?.value !== undefined) {
      simplify(target.left)
    }

    if (target.right?.value === null) {
      target.right = null
    } else if (target.right?.value !== undefined) {
      simplify(target.right)
    }
  }

  simplify(root)

  return root
}

// transformTree(Array(21).fill(null).map((_, i) => i+1))
// transformTree([17, 0, null, null, 1])
// transformTree([2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10])
