if(document.querySelectorAll('.menu-btn').length){
    var menuOverlay = document.createElement("div");
    menuOverlay.className = "mobile-overlay menu-overlay";
    document.body.appendChild(menuOverlay);
}
if(document.querySelectorAll('.dropdown-btn').length){
    var dropdownOverlay = document.createElement("div");
    dropdownOverlay.className = "mobile-overlay dropdown-overlay";
    document.body.appendChild(dropdownOverlay);
}

var $mobileButton = $('.menu-btn, .dropdown-btn');
$mobileButton.each(function(){
    var menu = $(this).data('menu'),
        position = $(this).data('menu-position'),
        height = $(this).data('menu-height');
    if($(this).hasClass('menu-btn')){
        $menu = $(menu).clone(true, true);
        $(menu).addClass('d-visible');
        $('body').append($menu.addClass('mobile-menu d-hide '+position));
    }else if($(this).hasClass('dropdown-btn')){
        $(menu).addClass('dropdown-menu '+position).height(height);
    }
});

$('.mobile-overlay').on('touchstart', function(){
    $('.menu-btn, .dropdown-btn').removeClass('active');
    $('.mobile-menu, .dropdown-menu, .mobile-overlay').removeClass('open');
});

if(!jQuery().hammer){
    $mobileButton.on('click', function(){
        showHideMenu($(this))
    });
    $('.sub-menu-btn').on('click', function(){
        $(this).toggleClass('active').nextAll('ul').toggleClass('open');
    });
}else{
    $mobileButton.hammer().on('tap', function(){
        event.preventDefault();
        showHideMenu($(this))
    });
    $('.sub-menu-btn').hammer().on('tap', function(){
        event.preventDefault();
        $(this).toggleClass('active').nextAll('ul').toggleClass('open');
    });
}

function showHideMenu($this){
    var menu = $this.data('menu') + '.mobile-menu';
    $('.mobile-overlay').removeClass('open');
    if(!$this.hasClass('active')){
        $('.menu-btn, .dropdown-btn').removeClass('active');
        $('.mobile-menu, .dropdown-menu, .menu-overlay').removeClass('open');
        if($this.hasClass('menu-btn')){
            $('.menu-overlay').addClass('open');
        }else if($this.hasClass('dropdown-btn')){
            $('.dropdown-overlay').addClass('open');
        }
    }
    $this.toggleClass('active');
    $(menu).toggleClass('open');
}