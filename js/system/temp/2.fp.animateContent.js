/**
 * Created by PavelCSS on 19.05.15.
 */

$(window).load(function(){
    var $scrollBox = $('.scroll-effect');

    if($scrollBox.length){
        $scrollBox.each(function(i){
            blockPos[i] = $(this).offset().top + 75;
        });
        scrollAnimate();
    }

    if($scrollBox.length){

        var blockPos = [];

        function scrollAnimate(){
            var scrollTop = $(window).scrollTop() + $(window).height();
            for(var i = 0; i<=blockPos.length; i++){

                if(scrollTop>=blockPos[i]){
                    $scrollBox.eq(i).addClass('animated');
                }
            }
        }

        $(window).scroll(function(){
            scrollAnimate();
        });

        $(window).resize(function(){
            $scrollBox.each(function(i){
                blockPos[i] = $(this).offset().top + 75;
            });
        });
    }

});