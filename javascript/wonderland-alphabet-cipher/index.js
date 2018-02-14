let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

module.exports = class AlpabetCipher {
  
  constructor(keyword) {
    if (!/^[a-zA-Z]*$/.test(keyword)) { throw new Error("The keyword may only contain alphabetical characters") }
    this.keyword = keyword
  }
  
  generateKeyFor(plainText) {
    let k = Math.ceil(plainText.length / this.keyword.length)
    return this.keyword.repeat(k).substring(0, plainText.length)
  }
  
  encrypt(plainText) {
    if (!/^[a-zA-Z]*$/.test(plainText)) { throw new Error("The plain test may only contain alphabetical characters") }
    let plain = plainText.split("")
    let key = this.generateKeyFor(plainText)
    return key.split("").map((keyChar, index) => {
      let i = keyChar.charCodeAt(0) - 96
      let j = plain[index].charCodeAt(0) - 96
      return alphabet[(i + j - 1) % alphabet.length - 1]
    }).join("")
  }
}
