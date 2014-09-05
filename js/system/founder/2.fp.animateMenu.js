function _onoffAnimateMenu(e){
    if($(window).width()>=768){
        $('.main_menu').on('mouseenter mouseleave', '.category', animateMenu);
    }else{
        $('.main_menu').off('mouseenter mouseleave', '.category', animateMenu);
        $('.main_menu ul').attr('style', '');
    }
}
function animateMenu(e){
    if(e.type=="mouseenter"){
        $(this).find('ul').slideDown('fast');
    }else{
        $(this).find('ul').stop(true, false).slideUp();
    }
}

if(!device.type){
    _onoffAnimateMenu();
    window.onresize = _onoffAnimateMenu;
}