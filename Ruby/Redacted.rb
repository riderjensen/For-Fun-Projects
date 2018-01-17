puts "Please enter the text to look through:"
text = gets.chomp
puts "Please enter the word to redact:"
redact = gets.chomp

words = text.split(" ")

words.each do |word_parts|
  if word_parts == redact
    print "REDACTED "
  else
  	print word_parts + " "  
  end
end