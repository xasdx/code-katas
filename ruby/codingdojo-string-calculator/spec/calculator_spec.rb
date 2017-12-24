require "calculator"

RSpec.describe Calculator, "#add" do
  it "returns the sum of two numbers" do
    calc = Calculator.new
    res = calc.add("2,2.2")
    expect(res).to eq 4.2
  end
end
