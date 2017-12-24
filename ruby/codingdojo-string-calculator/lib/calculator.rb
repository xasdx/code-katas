class Calculator
  
  def add(numbers)
    numbers
      .split(/[,\n]/)
      .each { |n| raise ArgumentError.new("Invalid use of separators") if n.empty? }
      .map(&:to_f)
      .sum
  end
end
