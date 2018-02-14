let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
let alphabeticalCharacters = /^[a-z]*$/

let generateKey = (plainText, keyword) => {
  if (plainText.length < 1 || keyword.length < 1) { return "" }
  let k = Math.ceil(plainText.length / keyword.length)
  return keyword.repeat(k).substring(0, plainText.length)
}

module.exports = class AlpabetCipher {
  
  constructor(keyword) {
    this.keyword = keyword.toLowerCase()
    if (!alphabeticalCharacters.test(this.keyword)) { throw new Error("The keyword may only contain alphabetical characters") }
  }
  
  encrypt(plainText) {
    plainText = plainText.toLowerCase()
    if (!alphabeticalCharacters.test(plainText)) { throw new Error("The plain test may only contain alphabetical characters") }
    let plain = plainText.split("")
    let key = generateKey(plainText, this.keyword)
    return key.split("").map((keyChar, index) => {
      let i = keyChar.charCodeAt(0) - 96
      let j = plain[index].charCodeAt(0) - 96
      return alphabet[(i + j - 1) % alphabet.length - 1]
    }).join("")
  }
}
