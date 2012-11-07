$(function() {
    var box = $('.box');

    var rotate = function(){
        TweenLite.to(box, 1, {css:{rotation: 360}});
    };

    var grow = function(){
        TweenLite.to(box, 1, {css:{scaleX:1.5, scaleY:1.5}});
    };

    var shrink = function(){
        TweenLite.to(box, 1, {css:{scaleX:0.5, scaleY:0.5}});
    };

    var bounceUp = function(){
        TweenLite.from(box, 3, {css:{top:"-100px"}, ease:Elastic.easeOut});
    };

    var slideLeft = function(){
        TweenLite.to(box, 2, {css:{left:"-1000px"}, ease:Back.easeIn});
    };

    var glow = function(){
        TweenLite.to(box, 9, {css:{boxShadow:"0 0 15px #ffffff"}});
    };

    var changeColor = function(){
        TweenLite.to(box, 2, {css:{backgroundColor:"#ff0000"}, repeat:4})
        ;
    };

    var shake = function(){
        TweenLite.from(box, 1, {css:{left:"-=50px"}, ease:Elastic.easeOut});
    };

    var handleClick = function(){
        $('a').click(function(){

            var animation = $(this).attr('id');

            switch (animation) {
                case 'rotate':
                rotate();
                break;

                case 'grow':
                grow();
                break;

                case 'shrink':
                shrink();
                break;

                case 'bounce-up':
                bounceUp();
                break;

                case 'slide-left':
                slideLeft();
                break;

                case 'glow':
                glow();
                break;

                case 'change-color':
                changeColor();
                break;

                case 'shake':
                shake();
                break;
            }
        });
    };

    handleClick();

});
