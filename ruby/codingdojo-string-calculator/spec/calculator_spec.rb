require "calculator"

RSpec.describe Calculator do
  
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
  
  it "returns the sum of a variable number of arguments" do
    numbers = [3, 4, 5.0, 6.66, 0.25]
    expect(@calc.add(numbers.join ",")).to eq numbers.sum
  end
  
  it "handles new line characters as separators" do
    expect(@calc.add("1\n2,3")).to eq 6
  end
  
  it "rejects misplaced separators" do
    expect { @calc.add("1\n,2") }.to raise_error(ArgumentError)
  end
  
  it "handles custom separators specified as '//[separator]\\n[numbers]'" do
    [
      ["//;\n1;2", 3],
      ["//|\n1|2|3", 6],
      ["//h\n3.4h3h1", 7.4],
      ["//h\n3h2\n1", 6]
    ].each do |input, expected|
      expect(@calc.add(input)).to eq expected
    end
  end
  
  it "rejects negative numbers" do
    expect { @calc.add("1,2.5,-3.2,4,-5.0") }.to raise_error(ArgumentError, /-3.2, -5.0$/)
  end
  
  it "returns the product of an arbitrary number of arguments" do
    expect(@calc.multiply("3,4,5.7")).to eq 68.4
  end
end
