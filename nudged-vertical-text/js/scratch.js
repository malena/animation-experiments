$(document).ready(function(){

	var $number_container = $('.numbers');

	var injectNumbers = function(){

		var x = 0;

		while (x < 500) {
			x++;
			$number_container.append('<a href="#">' + x + '</a>');
		}
	};

	injectNumbers();

	var push = function(){
		var $numbers = $('a');

		function tween(number){
			TweenLite.to(number, 1, {css:{rotation:"+=.5rad", left: "+10px"}});
		}

		$numbers.on('hover', function(){
			$(this).show('explode, { pieces: 2 }, 2000');
			tween(this);
		});
	};

	push();



});


