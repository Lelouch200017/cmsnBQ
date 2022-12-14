function MessageBox() 
{
	var _obj = this;
	var _count = 0;
	var _countWelcome = 0;
	var _welcomeBox;
	var _countM = 0;
	_obj.wait = function(m) {
		_count += 1;
		if (_count % 2 == 0) {
			return m + '▋';
		} else {
			return m.replace('▋','');
		}
	}
	_obj.setWelcome = function(b) {
		_welcomeBox = b;
	}
	_obj.printWelcome = function () {
		var welcomeMessage = 'hi, my roomate HAPPY BIRTHDAY TO YOU!!' + '\n'
		+ 'Naò chúng ta cùng hát chúc mừng sinh nhật nha!!!';
		var appear;
		for (var i = 0; i < welcomeMessage.length; i+=1) {
          
		  timer = setTimeout(function() {
		  	appear = '';
            for (var j = 0; j <= _countM; j+=1)
          	  appear += welcomeMessage[j];
            appear += '▋';
            _countM+=1;
            _welcomeBox.innerText = appear;
          }, i * 50);
		}
        timer = setTimeout(function() {
            _welcomeBox.innerText = welcomeMessage + '\n' + '▋';
          }, 6000);
	}

	_obj.saySomething = function(m) {
		var originM = m.replace('▋','');
		var sentence = 'sinh nhật vui vẻ .' + '\n' + 'Mình chúc bạn ' + '\n' 
		+ 'Tuổi mới gặp nhiều may mắn, mạnh khỏe, hạnh phúc.' + '\n' 
		+ 'Đây là những ảnh mình có  ';
		var appear;
		_countM = 0;
		console.log(sentence.length);
		for (var i = 0; i < sentence.length; i+=1) {
          
		  timer = setTimeout(function() {
		  	appear = originM;
            for (var j = 0; j <= _countM; j+=1)
          	  appear += sentence[j];
            appear += '▋';
            _countM+=1;
            _welcomeBox.innerText = appear;
          }, i * 50);
		}
		timer = setTimeout(function() {
            _welcomeBox.innerText = appear.replace('▋','');
          }, 9700);
	}

	_obj.saySomethingSecond = function(m) {
		var originM = m.replace('▋','') + '\n';
		var sentence = 'Và  .... ' + '\n' 
		+ 'Hãy giữ nụ cười của bạn không chỉ hôm nay mà mỗi ngày nha' + '\n' 
		+ 'Cuối cùng , một lần nữa mình muốn nói là ....... HAPPY ';
		var appear;
		_countM = 0;
		console.log(sentence.length);
		for (var i = 0; i < sentence.length; i+=1) {
          
		  timer = setTimeout(function() {
		  	appear = originM;
            for (var j = 0; j <= _countM; j+=1)
          	  appear += sentence[j];
            appear += '▋';
            _countM+=1;
            _welcomeBox.innerText = appear;
          }, i * 50);
		}
		timer = setTimeout(function() {
            _welcomeBox.innerText = appear.replace('▋','');
          }, 9850);
	}
};