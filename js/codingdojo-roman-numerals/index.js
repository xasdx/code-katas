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

module.exports = {
  toRoman: (n) => {
    rejectInvalidNumbers(n)
    return countDigits(n).reduce((acc, current) => `${acc}${current[0].repeat(current[1])}`, "")
  }
}
