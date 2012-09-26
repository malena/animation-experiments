$(document).ready(function(){

    (function() {
            var $ball = $('.ball1');
            var $ball2 = $('.ball2');
			var colors = ["#480e6e","#fc4239","#ffd400","#00c4df"];

            function play() {

                var tl = new TimelineLite({delay:0.5});

                tl.staggerTo([$ball, $ball2], 0.5, {css:{marginTop:0}})
                  .staggerTo([$ball, $ball2], 1.25, {css:{marginTop:350}, ease:Bounce.easeOut})
                  .staggerTo([$ball, $ball2], 2.5, {css:{marginLeft:"+=450px"}}, -1.75)
                  .staggerTo([$ball, $ball2], 1, {css:{marginLeft:0, backgroundColor:colors[ Math.floor(Math.random() * colors.length) ]}}, 1)
                  .call(play);
            }
            play();
	})();

});


