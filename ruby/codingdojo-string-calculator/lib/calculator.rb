class CalculatorInput
  
  attr_reader :numbers
  
  def initialize(input)
    if uses_custom_separator?(input)
      separator, numbers = parse_custom_separator input
      @numbers = parse_numbers(numbers, separator)
    else
      @numbers = parse_numbers input
    end
  end
  
  private
  
  def uses_custom_separator?(input)
    input.start_with? "//"
  end
  
  def parse_custom_separator(input)
    new_line_index = input.index "\n"
    separator = input[2, new_line_index - 2]
    numbers = input[new_line_index + 1 .. input.length - 1]
    return separator, numbers
  end
  
  def parse_numbers(str, separator = ",")
    splitter = Regexp.new('[' + separator + '\n]')
    return str.split(splitter)
      .each { |n| raise ArgumentError.new("Invalid use of separators") if n.empty? }
      .map(&:to_f)
  end
end

class Calculator
  
  def add(input)
    numbers = CalculatorInput.new(input).numbers
    assert_no_negatives numbers
    return numbers.sum
  end
  
  private
  
  def assert_no_negatives(numbers)
    if numbers.any? { |n| n < 0 }
      negatives = numbers.select { |n| n < 0 }
      raise ArgumentError.new("Negative numbers are not allowed: #{negatives.join(', ')}")
    end
  end
end
