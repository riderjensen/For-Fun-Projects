#different ways to write if statement
puts "I'm not writing code!" unless true

#different way to write if statement with an else
print true ? "true" : "false"

#shortened switch statment
puts "Hello there!"
greeting = gets.chomp
case greeting
  when "English" then puts "Hello!"
  when "French" then puts "Bonjour!"
  when "German" then puts "Guten Tag!"
  when "Finnish" then puts "Haloo!"
  else puts "I don't know that language!"
end

#conditional assignment to assign a value only if the variable has not been assigned yet
favorite_book ||= "Cat's Cradle"
puts favorite_book

#implicit return: function returns the last value it calculates
def multiple_of_three(n)
   n % 3 == 0 ? "True" : "False"
end


#respond_to? checks to see if you can do an operation on a thing
age = 26
age.respond_to?(:next)




caption = "A giraffe surrounded by "
caption << "weezards!"
#SAME AS
caption = "A giraffe surrounded by "
caption += "weezards!"


alphabet = ["a", "b", "c"]
alphabet << "d"
#SAME AS
alphabet = ["a", "b", "c"]
alphabet.push("d")