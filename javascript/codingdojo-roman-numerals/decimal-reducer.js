let decimalValueOf = {
  "M": 1000,
  "D": 500,
  "C": 100,
  "L": 50,
  "X": 10,
  "V": 5,
  "I": 1
}

let isFourOrNine = (current, index, array) => decimalValueOf[array[index-1]] > decimalValueOf[current]

let reduceFourOrNine = (acc, current, index, array) => acc - decimalValueOf[current]

let reduceNumber = (current, acc) => acc + decimalValueOf[current]

let reducer = (acc, current, index, array) =>
                isFourOrNine(current, index, array) ? reduceFourOrNine(acc, current, index, array)
                                                    : reduceNumber(current, acc)

module.exports = reducer
