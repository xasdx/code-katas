let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

module.exports = class AlpabetCipher {
  
  constructor(keyword) {
    this.keyword = keyword
  }
  
  generateKeyFor(plainText) {
    let k = Math.ceil(plainText.length / this.keyword.length)
    return this.keyword.repeat(k).substring(0, plainText.length)
  }
  
  encrypt(plainText) {
    let plain = plainText.split("")
    let key = this.generateKeyFor(plainText)
    return key.split("").map((keyChar, index) => {
      let i = keyChar.charCodeAt(0) - 96
      let j = plain[index].charCodeAt(0) - 96
      return alphabet[(i + j - 1) % alphabet.length - 1]
    }).join("")
  }
}
