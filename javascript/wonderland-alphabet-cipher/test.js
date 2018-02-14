let test = require("ava")
let AlpabetCipher = require(".")

test("encrypts input plain text", t => {
  let underTest = new AlpabetCipher("scones")
  let res = underTest.encrypt("meetmebythetree")
  t.is(res, "egsgqwtahuiljgs")
})

test("handles empty string when encrypting", t => {
  let underTest = new AlpabetCipher("scones")
  let res = underTest.encrypt("")
  t.is(res, "")
})

test("handles empty string as keyword", t => {
  let underTest = new AlpabetCipher("")
  let res = underTest.encrypt("hello")
  t.is(res, "")
})

test("rejects non-alphabetical characters when encrypting", t => {
  let underTest = new AlpabetCipher("scones")
  t.throws(() => underTest.encrypt("hello3"))
})

test("rejects non-alphabetical characters in the keyword", t => {
  t.throws(() => new AlpabetCipher("sc1"))
})

test("supports uppercase characters", t => {
  let underTest = new AlpabetCipher("scoNes")
  let res = underTest.encrypt("meetMebyTHetree")
  t.is(res, "egsgqwtahuiljgs")
})
