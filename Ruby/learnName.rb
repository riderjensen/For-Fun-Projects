print "What's your first name?"
first_name = gets.chomp

print "What's your last name?"
last_name = gets.chomp

print "What's your city?"
city = gets.chomp

print "What's your state (use two letter abreviation)?"
state = gets.chomp

first_name.capitalize!
last_name.capitalize!
city.capitalize!
state.upcase!

puts "Your name is #{first_name} #{last_name}; you are from #{city}, #{state}."