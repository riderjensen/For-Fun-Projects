my_array = ["raindrops", :kettles, "whiskers", :mittens, :packages]
symbol_filter = lambda {|var| var.is_a?Symbol}
symbols = my_array.select(&symbol_filter)
puts symbols

#block is code between { } or do ... end
#proc is a saved block
#lambda is like a proc but cares about number of arguments and returns to calling method, not return immediaetly like proc
