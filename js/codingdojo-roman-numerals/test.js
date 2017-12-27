let test = require("ava")
let underTest = require(".")

let toRoman = underTest.toRoman

let cases = {
  zero: { n: 0, r: RangeError },
  one: { n: 1, r: "I" },
  three: { n: 3, r: "III" },
  four: { n: 4, r: "IV" },
  nine: { n: 9, r: "IX" },
  threeK: { n: 3000, r: "MMM" },
  overThreeK: { n: 3001, r: RangeError },
  digit: [
    { n: 5, r: "V" },
    { n: 10, r: "X" },
    { n: 50, r: "L" },
    { n: 100, r: "C" },
    { n: 500, r: "D" },
    { n: 1000, r: "M" }
  ],
  random: [
    { n: 2678, r: "MMDCLXXVIII" },
    { n: 954, r: "CMLIV" },
    { n: 494, r: "CDXCIV" },
    { n: 444, r: "CDXLIV" },
    { n: 999, r: "CMXCIX" }
  ]
}

test("rejects zero", t => t.throws(() => toRoman(cases.zero.n), cases.zero.r))

test("converts decimal 1 to roman I", t => t.is(toRoman(cases.one.n), cases.one.r))

test("converts 3 to III", t => t.is(toRoman(cases.three.n), cases.three.r))

test("converts 4 to IV", t => t.is(toRoman(cases.four.n), cases.four.r))

test("converts 9 to IX", t => t.is(toRoman(cases.nine.n), cases.nine.r))

test("converts numbers to their one-digit roman equal",
      t => cases.digit.forEach(({ n, r }) => t.is(toRoman(n), r)))

test("rejects numbers > 3000", t => t.throws(() => toRoman(cases.overThreeK.n), cases.overThreeK.r))

test("converts 3000 to a roman number", t => t.is(toRoman(cases.threeK.n), cases.threeK.r))

test("converts random numbers",
      t => cases.random.forEach(({ n, r }) => t.is(toRoman(n), r)))
