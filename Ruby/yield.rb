def double(num)
	yield num
end

double(2) {|n| puts n*2}