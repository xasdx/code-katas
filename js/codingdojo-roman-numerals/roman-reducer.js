let isFour = (current, index, array) => current[1] === 4 && array[index-1][1] === 0

let isNine = (current, index, array) => current[1] === 4 && array[index-1][1] === 1

let reduceFour = (index, array, acc) => `${acc}${array[index][0]}${array[index-1][0]}`

let reduceNine = (index, array, acc) => `${acc.slice(0, -1)}${array[index][0]}${array[index-2][0]}`

let reduceNumber = (current, acc) => `${acc}${current[0].repeat(current[1])}`

let reducer = (acc, current, index, array) => 
                isFour(current, index, array) ? reduceFour(index, array, acc) :
                isNine(current, index, array) ? reduceNine(index, array, acc)
                                              : reduceNumber(current, acc)

module.exports = reducer
