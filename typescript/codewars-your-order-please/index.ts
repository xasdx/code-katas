let orderOf = (word: string) => Number(/(\d)/.exec(word)[0])

let comparator = (a: string, b: string) => orderOf(a) - orderOf(b)

let f = (words: string) => words.split(" ").sort(comparator).join(" ")

export { f as order }