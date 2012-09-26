$(document).ready(function(){

    (function() {
            var ball = $('.ball1'),
                colors = ["#480e6e","#fc4239","#ffd400","#00c4df"];

            function play() {
                ball.css('marginLeft', '0px');
                ball.css('marginTop', '350px');

                var tl = new TimelineLite({delay:0.5});
                tl.to(ball, 0.5, {css:{marginTop:0}})
                  .to(ball, 1.25, {css:{marginTop:350}, ease:Bounce.easeOut})
                  .to(ball, 2.5, {css:{marginLeft:"+=450px"}}, -1.75)
                  .to(ball, 1, {css:{marginLeft:0, backgroundColor:colors[ Math.floor(Math.random() * colors.length) ]}}, 1)
                  .call(play);
            }
            play();
    })();

});






