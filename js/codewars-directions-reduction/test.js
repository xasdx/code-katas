let test = require("ava")
let underTest = require(".")

let cases = [
  { input: ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"], result: ["WEST"] },
  { input: ["NORTH", "WEST", "SOUTH", "EAST"], result: ["NORTH", "WEST", "SOUTH", "EAST"] },
  { input: ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"], result: [] }
]

test("reduces directions", t => cases.forEach(testCase => t.deepEqual(underTest(testCase.input), testCase.result)))
