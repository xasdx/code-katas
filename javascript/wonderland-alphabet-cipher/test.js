let test = require("ava")
let AlpabetCipher = require(".")

test("generates a string using the keyword to be combined with the plain text", t => {
  let keyword = "scones"
  let underTest = new AlpabetCipher(keyword)
  t.is(underTest.keyword, keyword)
  let key = underTest.generateKeyFor("meetmebythetree")
  t.is(key, "sconessconessco")
})

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
  let key = underTest.generateKeyFor("")
  t.is(key, "")
})
