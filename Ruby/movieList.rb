movies = {
  madMax: 10,
  rider: 5
  }
puts "What would you like to do (add, update, display, delete)?"
choice = gets.chomp
choice.downcase!
case choice
  when "add"
  	puts "What is the movie?"
  	title = gets.chomp
  	puts "What is the rating?"
  	rating = gets.chomp
  	if movies[title.intern] == nil
  		movies[title.intern] = rating.to_i
    else
      puts "That movies is already in here!"
    end
  when "update"
  	puts "What is the title you want to update?"
  	title = gets.chomp
  	if movies[title.intern] == nil
      puts "There is no movie named that in your list"
    else
      puts "What is the new rating?"
      rating = gets.chomp
      movies[title.intern] = rating.to_i
    end
  when "display"
  	movies.each do |key, pair| 
      puts "#{key}: #{pair}"
    end
  when "delete"
  	puts "What is the title you want to delete?"
  	title = gets.chomp
  	if movies[title.intern] == nil
      puts "That movie is not in the list"
    else
      movies.delete(title.intern)
    end
  else
  	puts "Error!"
end