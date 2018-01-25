def greeter
  yield
end

phrase = Proc.new {puts "Hello there!"}
greeter(&phrase)

#using .call
hi = Proc.new {puts "Hello!"}
hi.call