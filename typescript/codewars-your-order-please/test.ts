import { order } from "./index"

describe("Solution", () => {
  
  it("orders words of a sentence", () => {
    expect(order("is2 Thi1s T4est 3a")).toBe("Thi1s is2 3a T4est")
    expect(order("4of Fo1r pe6ople g3ood th5e the2")).toBe("Fo1r the2 g3ood 4of th5e pe6ople")
  })
  
  it("handles empty input strings", () => expect(order("")).toBe(""))
})
