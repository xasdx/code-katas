require "calculator"

RSpec.describe Calculator, "#add" do
  
  before :example do
    @calc = Calculator.new
  end
  
  it "returns the sum of two numbers" do
    expect(@calc.add("2,2.2")).to eq 4.2
  end
  
  it "returns the number when only one number is passed" do
    expect(@calc.add("3")).to eq 3
  end
  
  it "returns zero when called with an empty string" do
    expect(@calc.add("")).to eq 0
  end
end
