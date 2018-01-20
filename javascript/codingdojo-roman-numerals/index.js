let romanReducer = require("./roman-reducer")
let decimalReducer = require("./decimal-reducer")

let rejectInvalidDecimalNumbers = (n) => {
  if (n <= 0 || n > 3000) {
    throw new RangeError(`Cannot convert ${n} to a roman number. Must be in range (0..3000].`)
  }
}

let rejectInvalidRomanNumbers = (str) => {
  if (str.length < 1) {
    throw new RangeError(`Cannot convert an empty string to a decimal number.`)
  } else if (/[^IVXLCDM]/.test(str)) {
    throw new RangeError(`The string ${str} contains invalid characters. Valid characters are I, V, X, L, C, D, M.`)
  }
}

let countRomanDigits = (n) => [
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
    rejectInvalidDecimalNumbers(n)
    return countRomanDigits(n).reduce(romanReducer, "")
  },
  toDecimal: (str) => {
    rejectInvalidRomanNumbers(str)
    return str.split("").reverse().reduce(decimalReducer, 0)
  }
}
