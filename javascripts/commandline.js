function CommandLine() 
{
	var _obj = this;
	var _counter = 0;
    _obj.returnNextCommand = function() {
    	_counter+=1;
    	if (_counter == 1)
    		return "d▋";
    	else if (_counter == 2)
    		return "da▋";
    	else if (_counter == 3)
    		return "dat▋";
    	else if (_counter == 4)
    		return "date▋";
    	else if (_counter == 5)
    		return "date";
    	else if (_counter == 6)
    		return ".▋";
    	else if (_counter == 7)
    		return "./▋";
    	else if (_counter == 8)
    		return "./S▋";
    	else if (_counter == 9)
    		return "./Sa▋";
    	else if (_counter == 10)
    		return "./Say▋";
    	else if (_counter == 11)
    		return "./SayH▋";
    	else if (_counter == 12)
    		return "./SayHa▋";
    	else if (_counter == 13)
    		return "./SayHap▋";
    	else if (_counter == 14)
    		return "./SayHapp▋";
    	else if (_counter == 15)
    		return "./SayHappy▋";
    	else if (_counter == 16)
    		return "./SayHappyB▋";
    	else if (_counter == 17)
    		return "./SayHappyBi▋";
    	else if (_counter == 18)
    		return "./SayHappyBir▋";
    	else if (_counter == 19)
    		return "./SayHappyBirt▋";
    	else if (_counter == 20)
    		return "./SayHappyBirth▋";
    	else if (_counter == 21)
    		return "./SayHappyBirthd▋";
    	else if (_counter == 22)
    		return "./SayHappyBirthda▋";
    	else if (_counter == 23)
    		return "./SayHappyBirthday▋";
    	else if (_counter == 24)
    		return "./SayHappyBirthday";
    	else if (_counter == 25)
    		return "./SayHappyBirthday";
    	
    	
    }
};