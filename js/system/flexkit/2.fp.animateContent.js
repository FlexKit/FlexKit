/**
 * Created by PavelCSS on 19.05.15.
 */

$(window).load(function(){
    var $scrollBox = $('.scroll-effect');

    if($scrollBox.length){

        var scrollBoxPos = [];
        $scrollBox.each(function(i){
            scrollBoxPos[i] = $(this).offset().top + $(this).height() / 2;
        });
        scrollAnimate();

        function scrollAnimate(){
            var scrollTop = $(window).scrollTop() + $(window).height();
            for(var i = 0; i<=scrollBoxPos.length; i++){

                if(scrollTop>=scrollBoxPos[i]){
                    $scrollBox.eq(i).addClass('animated ' + $scrollBox.eq(i).data('animate'));
                }
            }
        }

        $(window).scroll(function(){
            scrollAnimate();
        });

        $(window).resize(function(){
            $scrollBox.each(function(i){
                scrollBoxPos[i] = $(this).offset().top + 75;
            });
        });
    }

});