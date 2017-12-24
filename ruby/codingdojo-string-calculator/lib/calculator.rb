class Calculator
  
  def add(numbers)
    numbers.split(",").map(&:to_f).reduce(0, :+)
  end
end
