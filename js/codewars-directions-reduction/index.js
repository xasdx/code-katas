let oppositeDirection = { "EAST": "WEST", "WEST": "EAST", "NORTH": "SOUTH", "SOUTH": "NORTH" }

let reduceDirection = directions => {
  let didRemove = false
  directions.forEach((value, index, array) => {
    if (value === oppositeDirection[array[index + 1]]) {
      array.splice(index, 2)
      didRemove = true
    }
  })
  return didRemove
}

let dirReduc = directions => !reduceDirection(directions) ? directions : dirReduc(directions)

module.exports = dirReduc
