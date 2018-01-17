

#Loop
i = 0
loop do
  print "Ruby!"
  i += 1
  break if i == 30
end




#for loop
for i in 1..50
  print i
end



#.each loop
array = [1,2,3,4,5]

array.each do |x|
  x += 10
  print "#{x}"
end


#.times loop
5.times {print "money"}

#while loop
i = 3
while i > 0 do
  print i
  i -= 1
end

#until loop
j = 3
until j == 0 do
  print j
  j -= 1
end