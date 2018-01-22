let orderOf = (word: string) => /([1-9])/.exec(word)

let comparator = (a: string, b: string) => orderOf(a) < orderOf(b) ? -1 : orderOf(a) > orderOf(b) ? 1 : 0

let f = (words: string) => words.split(" ").sort(comparator).join(" ")

export { f as order }