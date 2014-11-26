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

$('.dropdown-btn').each(function(){
    var menu = $(this).data('menu'),
        position = $(this).data('menu-position'),
        height = $(this).data('menu-height');
    $(menu).addClass('dropdown-menu '+position).height(height);
});

$('.mobile-overlay').on('mousedown touchstart', function(){
    $('body').removeAttr('data-menu-open');
    $('.menu-btn, .dropdown-btn').removeClass('active');
    $('.dropdown-menu, .mobile-overlay').removeClass('open');
});

if(!jQuery().hammer){
    $('.menu-btn').on('click', function(){
        showMenu($(this))
    });
    $('.dropdown-btn').on('click', function(){
        showDropdown($(this))
    });
    $('.sub-menu-btn').on('click', function(){
        $(this).toggleClass('active').nextAll('ul').toggleClass('open');
    });
}else{
    $('.menu-btn').hammer().on('tap', function(){
        event.preventDefault();
        showMenu($(this))
    });
    $('.dropdown-btn').hammer().on('tap', function(){
        event.preventDefault();
        showDropdown($(this))
    });
    $('.sub-menu-btn').hammer().on('tap', function(){
        event.preventDefault();
        $(this).toggleClass('active').nextAll('ul').toggleClass('open');
    });
}

function showMenu($this){
    var menuPosition = $this.data('menu-position');
    $('.mobile-overlay, .dropdown-menu').removeClass('open');
    if(!$this.hasClass('active')){
        $('.menu-btn, .dropdown-btn').removeClass('active');
        $('body').attr('data-menu-open', menuPosition);
        $('.menu-overlay').addClass('open');
    }else{
        $('body').removeAttr('data-menu-open');
    }
    $this.toggleClass('active');
}

function showDropdown($this){
    var menu = $this.data('menu');
    $('.mobile-overlay').removeClass('open');
    $('body').removeAttr('data-menu-open');
    if(!$this.hasClass('active')){
        $('.menu-btn, .dropdown-btn').removeClass('active');
        $('.dropdown-menu').removeClass('open');
        $('.dropdown-overlay').addClass('open');
    }
    $this.toggleClass('active');
    $(menu).toggleClass('open');
}