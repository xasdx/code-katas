let test = require("ava")
let underTest = require(".")

let toRoman = underTest.toRoman

test("rejects zero", t => t.throws(() => toRoman(0), RangeError))

test("converts decimal 1 to roman I", t => t.is(toRoman(1), "I"))

test("converts 3 to III", t => t.is(toRoman(3), "III"))

test("converts 4 to IV", t => t.is(toRoman(4), "IV"))

test("converts numbers to their one-digit roman equal", t => [
  { decimal: 5, roman: "V" },
  { decimal: 10, roman: "X" },
  { decimal: 50, roman: "L" },
  { decimal: 100, roman: "C" },
  { decimal: 500, roman: "D" },
  { decimal: 1000, roman: "M" }
].forEach(({ decimal, roman }) => t.is(toRoman(decimal), roman)))

test("converts 2678 to roman number", t => {
  t.is(toRoman(2678), "MMDCLXXVIII")
})
