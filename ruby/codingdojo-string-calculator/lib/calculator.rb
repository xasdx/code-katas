class Calculator
  
  def add(numbers)
    numbers.split(",").map(&:to_f).sum
  end
end
