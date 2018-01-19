def alphabetize(arr, reverse=false)
  arr.sort!
  if reverse==true
    arr.reverse!
  else
  	return arr 
  end
end

my_array = [5,3,3,1,4]
alphabetize(my_array, true)
puts my_array