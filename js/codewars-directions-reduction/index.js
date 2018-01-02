let directions = {
  h: { a: "EAST",  b: "WEST"  },
  v:   { a: "NORTH", b: "SOUTH" }
}

let isOpposite = (a, b) => a === directions.h.a && b === directions.h.b ||
                           a === directions.h.b && b === directions.h.a ||
                           a === directions.v.a && b === directions.v.b ||
                           a === directions.v.b && b === directions.v.a

let removeNeedlessStep = directions => {
  let didRemove = false
  directions.forEach((value, index, array) => {
    if (isOpposite(value, array[index + 1])) {
      array.splice(index, 2)
      didRemove = true
    }
  })
  return didRemove
}

let dirReduc = directions => !removeNeedlessStep(directions) ? directions : dirReduc(directions)

module.exports = dirReduc
