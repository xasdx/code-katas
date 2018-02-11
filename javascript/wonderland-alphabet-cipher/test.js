let test = require("ava")
let AlpabetCipher = require(".")

test("generates a string using the keyword to be combined with the plain text", t => {
  let keyword = "scones"
  let underTest = new AlpabetCipher(keyword)
  t.is(underTest.keyword, keyword)
  let key = underTest.generateKeyFor("meetmebythetree")
  t.is(key, "sconessconessco")
})
