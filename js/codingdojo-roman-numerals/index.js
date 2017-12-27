let rejectInvalidNumbers = (n) => {
  if (n <= 0 || n > 3000) {
    throw new RangeError(`Cannot convert ${n} to a roman number. Must be in range (0..3000].`)
  }
}

let countDigits = (n) => [
  ["M", Math.floor(n / 1000)],
  ["D", Math.floor(n % 1000 / 500)],
  ["C", Math.floor(n % 500 / 100)],
  ["L", Math.floor(n % 100 / 50)],
  ["X", Math.floor(n % 50 / 10)],
  ["V", Math.floor(n % 10 / 5)],
  ["I", Math.floor(n % 5)]
]

let isFour = (current, index, array) => current[1] === 4 && array[index-1][1] === 0

let isNine = (current, index, array) => current[1] === 4 && array[index-1][1] === 1

let reduceFour = (index, array, acc) => `${acc}${array[index][0]}${array[index-1][0]}`

let reduceNine = (index, array, acc) => `${acc.slice(0, -1)}${array[index][0]}${array[index-2][0]}`

let reduceNumber = (current, acc) => `${acc}${current[0].repeat(current[1])}`

let romanReducer = (acc, current, index, array) => 
                    isFour(current, index, array) ? reduceFour(index, array, acc) :
                    isNine(current, index, array) ? reduceNine(index, array, acc) :
                                                    reduceNumber(current, acc)

module.exports = {
  toRoman: (n) => {
    rejectInvalidNumbers(n)
    return countDigits(n).reduce(romanReducer, "")
  }
}
