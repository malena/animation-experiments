$(document).ready(function(){

    function explode(letters){

        var $letters = $(letters);

        $letters.html($letters.text().replace(/([\S])/g, "<span>$1</span>"));
        $letters.css("position", "relative");

        $("span").each(function(i) {

            var newTop = Math.floor(Math.random()*500)*((i%2)?1:-1);
            var newLeft = Math.floor(Math.random()*500)*((i%2)?1:-1);

            /* jQuery Animate
            $(this).css({position: "relative",
                opacity: 1,
                fontSize: 60,
                top: 0,
                left: 0
                    }).animate({
                    opacity: 0,
                    fontSize: 84,
                    top: newTop,
                    left:newLeft
            },1000);
            */

            /* Tweenlite
             */
            $(this).css({position: "relative", opacity: 1, fontSize: 60, top: 0, left: 0});
            TweenLite.to(this, 1, {css:{opacity:"0", fontSize:"84", top: newTop, left: newLeft}});

        });
    }

    $('a').on('click', function(){
        explode(this);
    });
});
