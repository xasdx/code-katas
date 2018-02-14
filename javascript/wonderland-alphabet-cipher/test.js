let test = require("ava")
let { Cipher, generateKey } = require(".")

test("generates a string using the keyword to be combined with the plain text", t => {
  let res = generateKey("meetmebythetree", "scones")
  t.is(res, "sconessconessco")
})

test("encrypts input plain text", t => {
  let underTest = new Cipher("scones")
  let res = underTest.encrypt("meetmebythetree")
  t.is(res, "egsgqwtahuiljgs")
})

test("handles empty string when encrypting", t => {
  let underTest = new Cipher("scones")
  let res = underTest.encrypt("")
  t.is(res, "")
})

test("handles empty string as keyword", t => {
  let underTest = new Cipher("")
  let res = underTest.encrypt("hello")
  t.is(res, "")
})

test("rejects non-alphabetical characters when encrypting", t => {
  let underTest = new Cipher("scones")
  t.throws(() => underTest.encrypt("hello3"))
})

test("rejects non-alphabetical characters in the keyword", t => {
  t.throws(() => new Cipher("sc1"))
})

test("supports uppercase characters", t => {
  let underTest = new Cipher("scoNes")
  let res = underTest.encrypt("meetMebyTHetree")
  t.is(res, "egsgqwtahuiljgs")
})
