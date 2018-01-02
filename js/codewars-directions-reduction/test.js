let test = require("ava")
let underTest = require(".")

let cases = [
  { input: ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"], result: ["WEST"] },
  { input: ["NORTH", "WEST", "SOUTH", "EAST"], result: ["NORTH", "WEST", "SOUTH", "EAST"] },
  { input: ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"], result: [] }
]

test("reduces directions", t => cases.forEach((input, res) => t.is(underTest(input), res))
