module.exports = class AlpabetCipher {
  
  constructor(keyword) {
    this.keyword = keyword
  }
  
  generateKeyFor(plainText) {
    let k = Math.ceil(plainText.length / this.keyword.length)
    return this.keyword.repeat(k).substring(0, plainText.length)
  }
}