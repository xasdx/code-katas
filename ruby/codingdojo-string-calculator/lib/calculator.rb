class Calculator
  
  def add(input)
    if input.start_with? "//"
      separator, numbers = parse_custom_separator(input)
      sum(numbers, separator)
    else
      sum input
    end
  end
  
  private
  
  def sum(str, separator = ",")
    splitter = Regexp.new('[' + separator + '\n]')
    
    numbers = str.split(splitter)
      .each { |n| raise ArgumentError.new("Invalid use of separators") if n.empty? }
      .map(&:to_f)
    
    if numbers.any? { |n| n < 0 }
      negatives = numbers.select { |n| n < 0 }
      raise ArgumentError.new("Negative numbers are not allowed: #{negatives.join(', ')}")
    end
      
    numbers.sum
  end
  
  def parse_custom_separator(input)
    new_line_index = input.index "\n"
    separator = input[2, new_line_index - 2]
    numbers = input[new_line_index + 1 .. input.length - 1]
    return separator, numbers
  end
end
