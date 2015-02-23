$('.dropdown-btn').each(function(){
    var menu = $(this).data('menu'),
        height = $(this).data('menu-height'),
        position = $(this).data('menu-position'),
        type = $(this).data('menu-type'); // mobile or empty
    if(type !== 'mobile'){
        $(menu).addClass('dropdown-menu');
    }
    $(menu).addClass(position).height(height);
});

tapButton('menu-btn', showMenu);
tapButton('dropdown-btn', showDropdown);
tapButton('sub-menu-btn', function(e){
    event.stopPropagation();
    event.preventDefault();
    $(this).toggleClass('active').nextAll('ul').toggleClass('open');
});

var body = document.body;
$(body).on(events[0], hideMenu);

function hideMenu(e){
    if(e.target.hasAttribute('data-menu-open') || e.target.hasAttribute('data-dropdown-open')){
        $('.dropdown-menu, .dropdown-menu-mobile').removeClass('open');
        $('.dropdown-btn, .menu-btn').removeClass('active');
        $(body).removeAttr('data-menu-open').removeAttr('data-dropdown-open');
    }
}

function showMenu(e){
    //    even.stopPropagation();
    e.preventDefault();
    var menuPosition = $(this).data('menu-position');
    $(body).attr('data-menu-open', menuPosition);
    $(this).addClass('active');
}

function showDropdown(e){
    //    ev.stopPropagation();
    e.preventDefault();
    var menu = $(this).data('menu');
    $(menu).addClass('open');
    $(body).attr('data-dropdown-open', '');
    $(this).addClass('active');
}

function tapButton(selector, fun){
    var listItems = document.getElementsByClassName(selector);
    if(!window.Hammer){
        for(var i = 0; i < listItems.length; i++){
            if (window.addEventListener) {
                listItems[i].addEventListener('click', fun, false);
            } else if (window.attachEvent) {
                listItems[i].attachEvent('click', fun, false);
            }
        }
    }else{
        Hammer.each(listItems, function(item){
            var touchControl = new Hammer(item);
            touchControl.on("tap", fun);

        });
    }
}